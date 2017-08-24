const express = require('express');


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

router.post('/teamprocess', (req, res) => {
  res.status(200).json({
    redProcess: 10,
    blueProcess: 35,
    greenProcess: 90,
    yellowProcess: 25
  });
});


module.exports = router;
