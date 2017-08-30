
import React ,{ Component } from 'react';
import {Link} from 'react-router';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subheader from 'material-ui/Subheader';
import PersonAdd from 'material-ui/svg-icons/social/person-add';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: '100vh',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/grace.jpg',
    title: '想跟Grace住',
    featured: true,
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/FB!.jpg',
    title: '我是聖結石',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E5%90%B3%E4%BA%A6%E5%87%A1.jpg',
    title: '我有freeStyle',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E7%A7%91p.jpg',
    title: '我想找柯P',
    featured: true,
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E5%B8%A5%E5%93%A5.jpg',
    title: '想跟帥哥住',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E7%BE%8E%E5%A5%B3.jpeg',
    title: '想跟美女住',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E8%BF%AA%E5%A3%AB%E5%B0%BC.jpg',
    title: '我想住皇宮',
    featured: true,
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class lotsPickerPage  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    }

    this.select = this.select.bind(this);
  }

  select(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
        >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
              actionIcon={<Link to="/showroom"><IconButton><PersonAdd color="white" /></IconButton></Link>}
            >
              <img src={tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
};

export default lotsPickerPage;



