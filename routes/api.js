const express = require('express');
const path = require('path');
const csv = require('fast-csv');
const fs = require('fs');
const _ = require('lodash');
const Team = require('mongoose').model('Team');
const Money = require('mongoose').model('Money');
const User = require('mongoose').model('User');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

router.get('/whatmyroom', (req, res) => {
  res.status(200).json({
    room: `You're live in Number ${Math.floor((Math.random() * 10) + 1)}.`
  });
});


// router.post('/initteamprogress/:teamid', async (req, res) => {
//   let teamId = req.params.teamid;
//   const collections = await Team.findOne({ team: teamId });
//   let missions = collections.missions || null;
//   let tempRed = 0; let tempBlue = 0; let tempGreen = 0; let tempYellow = 0;
//   if (missions != null) {
//     for (let mission of missions) {
//       switch (mission.mId[0]) {
//         case 'R': tempRed += 1; break;
//         case 'B': tempBlue += 1; break;
//         case 'G': tempGreen += 1; break;
//         case 'Y': tempYellow += 1; break;
//       }
//     }
//   }

//   res.status(200).json({
//     //  Total nums of mission => red: 10 , blue: 7 , green: 12 , yellow: 9
//     redProgress: parseInt(tempRed),
//     blueProgress: parseInt(tempBlue),
//     greenProgress: parseInt(tempGreen),
//     yellowProgress: parseInt(tempYellow)
//   });
// });
router.post('/initteamprogress', async (req, res) => {
  // let teamId = req.params.teamid;
  let tempRed = 0; let tempBlue = 0; let tempGreen = 0; let tempYellow = 0;
  const collections = await Team.find();
  
  for (let collection of collections) {
    let missions = collection.missions || null;
    if (missions != null) {
      for (let mission of missions) {
        switch (mission.mId[0]) {
          case 'R': tempRed += 1; break;
          case 'B': tempBlue += 1; break;
          case 'G': tempGreen += 1; break;
          case 'Y': tempYellow += 1; break;
        }
      }
    }
  }
  res.status(200).json({
    //  Total nums of mission => red: 10 , blue: 7 , green: 12 , yellow: 9
    redProgress: parseInt(tempRed),
    blueProgress: parseInt(tempBlue),
    greenProgress: parseInt(tempGreen),
    yellowProgress: parseInt(tempYellow)
  });
});

// router.post('/teamprogress', async (req, res) => {
//   res.status(200).json({
//     //  Total nums of mission => red: 10 , blue: 7 , green: 12 , yellow: 9
//     redProgress: parseInt(redProgress),
//     blueProgress: parseInt(blueProgress),
//     greenProgress: parseInt(greenProgress),
//     yellowProgress: parseInt(yellowProgress)
//   });
// });

//general query
router.post('/query',(req,res)=>{
  let teamId=req.body.team;
  Team.findOne({team:teamId},(err,team)=>{
    res.status(200).json(team);
  })
});
//mission
router.put('/donemission/:id/:type', (req, res) => {
  let csvStream = fs.createReadStream(path.resolve('./static/csv', 'missionList.csv'));
  let isFound = false;
  let existed = -1;
  let reqId = req.params.id;
  let reqType = req.params.type;
  let teamId = req.body.team;
  //加入前一個任務的檢查

  csv.fromStream(csvStream, {
    headers: [
      'mId', 'title', 'fromUs', 'ourDetail', 'fromBoss', 'bossDetail', 'bossDetail2', 'getItem', 'lostItem', 'success', 'failed', 'paid','getItemUrl'
    ]
  }).on("data", (data) => {
    
    if (data.mId === reqId && !isFound) {
      
      Team.findOne({ team:teamId}, (err, team) => {
        if (err) throw err;
        let temp = team.missions;
        let tempMoney=team.money;
        let tempItem=team.items;
        let prevId=data.mId.split('-');
        let currentNum=prevId[1];
        let prevDone=0;
        prevId=`${prevId[0]}-${prevId[1]-1}`;
        existed = _.findIndex(temp, { 'mId': data.mId });
    
        if(currentNum!=="1")prevDone = _.findIndex(temp,{mId:prevId});

        if(existed===-1&&prevDone!==-1){
          switch(reqType){
            case 'success':
              temp.push({
                mId: data.mId,
                data: _.omit(data, ['mId', 'failed']),
                isSuccess: true
              });
              if (data.success) {
                let successMoney = parseInt(data.success);
                tempMoney += successMoney;
              }
              break;
            case 'failed':
              temp.push({
                mId: data.mId,
                data: _.omit(data, ['mId', 'success']),
                isSuccess: false
              });
              if (data.failed) {
                let failedMoney = parseInt(data.failed);
                tempMoney += failedMoney;
              }
              break;
          }

          if (data.getItem) {
              tempItem.push({ item: data.getItem, url: data.getItemUrl });
          }
          if (data.lostItem) {
              let itemIndex = _.findIndex(tempItem, { 'item': data.lostItem });
              if (itemIndex > -1) {
                  tempItem.splice(itemIndex, 1);
              }
          }
        
         
          if (data.paid) {
              let PaidMoney = parseInt(data.paid);
              tempMoney -= PaidMoney;
          }
            
        }

        Team.findOneAndUpdate({ team: teamId }, { missions:temp,items:tempItem,money:tempMoney}, (err, team) => {
          if (err) throw err;
          Team.findOne({ team: teamId }, (err, team) => {
            if (err) throw err;
            res.status(200).json({ team, isNew: (existed === -1 && prevDone !== -1) });
          })
        });
      });
      isFound = !isFound;
    }
  }
    ).on("end", () => {
      if (!isFound) res.json({ err: 'mission not found!' });
    });
});

//money
router.put('/money/:id/:type', (req, res) => {

  let teamId = req.params.id;
  let reqType = req.params.type;
  let mId = req.body.mId;
  
      Money.findOne({ mSerial: mId }, (err,money) => {
        if (err) throw err;
        if (money) {
          let moneyTemp=0;
          Team.findOne({ team: teamId }, (err, team) => {
            if (err) throw err;
            if (reqType === 'add'&&!money.isExpired) {
              moneyTemp = team.money + money.amount;
            } else if (reqType === 'minus' && !money.isExpired){
              moneyTemp = team.money - money.amount;
            } else {
              moneyTemp=team.money;
            }

            Team.findOneAndUpdate({ team: teamId }, { money: moneyTemp }, (err, team) => {
              if (err) throw err;
              Team.findOne({ team: teamId }, (err, team) => {
                if (err) throw err;
                Money.findOneAndUpdate({ mSerial: mId }, { isExpired: true }, (err, returnMoney) => {
                  if (err) throw err;
                });
                res.status(200).json(team);
              });
            });
          });
        }else{
          res.status(200).json({err:`想騙錢？`});
        }
      });
});
//init user
router.put('/user/init', (req, res) => {
  let email=`<${req.body.email}>`;
  let csvStream = fs.createReadStream(path.resolve('./static/csv', 'internList.csv'));
  let updateData={}
 
  csv.fromStream(csvStream, { headers: ['Id', 'name', 'email', 'gender', 'isGod'] })
    .on("data", (data) => {
      if (data.email === email) {
        updateData={
          gender:data.gender,
          teamId:data.Id,
          alMightyOnes:false,
          isGod:data.isGod
        }
      }
    }
    ).on("end", () => {
     
      User.findOneAndUpdate({ email:req.body.email},updateData,(err, user) => {
        if(err)throw err;
        User.findOne({ email: req.body.email}, (err, user1) => {
          // console.log(`user1 is `, user1);
          res.status(200).json(user1);
        })
    });
  });
});
//get user
//delete all user
router.get('/godu/delete', (req, res) => {
  User.remove({}, (err, user) => {
    if (err) throw err;
    res.status(200).json(user);
  });
});
//init team
router.get('/godt/init/:id', (req, res) => {
  let reqId = req.params.id;//teamId
  let reqLine = req.params.line;//Line 
  let csvStream = fs.createReadStream(path.resolve('./static/csv', 'internList.csv'));
  let members = [];
  csv.fromStream(csvStream, { headers: ['Id', 'name', 'email', 'gender', 'isGod'] })
    .on("data", (data) => {
      if (data.Id === reqId) {
        members.push(data);
      }
    }
    ).on("end", () => {
      let team = new Team({
        team: reqId,
        member: members,
        missions: [],
        money: 0,
        items: []
      });

      team.save((err) => {
        if (err) throw err;
        Team.findOne({ team: reqId }, (err, team) => {
          if (err) throw err;
          res.status(200).json(team);
        });
      });
    });
});
//get all team
router.get('/godt/query', (req, res) => {
  Team.find({}, (err, team) => {
    if (err) throw err;
    res.status(200).json(team);
  });
});
//del all team
router.get('/godt/delete', (req, res) => {
  Team.remove({}, (err, team) => {
    if (err) throw err;
    res.status(200).json(team);
  });
});


//add all $$
router.get('/godm/init', (req, res) => {
  let counter=0;
  let csvStream = fs.createReadStream(path.resolve('./static/csv', 'money.csv'));
  csv.fromStream(csvStream, { headers: ['mSerial', 'amount'] })
    .on("data", (data) => {
      counter++
      let money=new Money({
         mSerial:data.mSerial,
         amount:data.amount,
         isExpired:false
      });
      money.save((err) => {
        if (err) throw err;
      });
      
    }).on("end", () => {
      Money.find({}, (err, money) => {
        if (err) throw err;
        let len=money.length;
        res.status(200).json(money);
      });
    });    
});


//get all $$$
router.get('/godm/query', (req, res) => {
  Money.find({}, (err, money) => {
    if (err) throw err;
    res.status(200).json(money);
  });
});
//clearAll $$
router.get('/godm/delete', (req, res) => {
  Money.remove({}, (err, money) => {
    if (err) throw err;
    res.status(200).json(money);
  });
});

module.exports = router;
