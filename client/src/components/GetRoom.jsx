
import React ,{Component} from 'react';
import {Link} from 'react-router';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import PersonAdd from 'material-ui/svg-icons/social/person-add';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100vw',
    height: '100vh',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/grace.jpg',
    title: '想跟Grace住',
    author: 'House1',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/FB!.jpg',
    title: '我是聖結石',
    author: 'House2',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E5%90%B3%E4%BA%A6%E5%87%A1.jpg',
    title: '我有freeStyle',
    author: 'House3',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E5%AE%89%E5%A8%9C%E8%B2%9D%E7%88%BE.jpg',
    title: '想住厲陰宅',
    author: 'House4',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E5%B8%A5%E5%93%A5.jpg',
    title: '想跟帥哥住',
    author: 'House5',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E7%A7%91p.jpg',
    title: '我想找柯P',
    author: 'House6',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E7%BE%8E%E5%A5%B3.jpeg',
    title: '想跟美女住',
    author: 'House7',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E8%BF%AA%E5%A3%AB%E5%B0%BC.jpg',
    title: '我想住皇宮',
    author: 'House8',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const lotsPickerPage = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>請選擇一張房間卡！</Subheader>
      {tilesData.map((tile) => (
        <Link to="/showroom">
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span> <b>{tile.author}</b></span>}
          actionIcon={<IconButton><PersonAdd color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
        </Link>
      ))}
    </GridList>
  </div>
);

export default lotsPickerPage;



