
import React ,{ Component } from 'react';
import {Link} from 'react-router';
import { render } from 'react-dom';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    height: '90vh',
    overflowY: 'auto',
    marginBottom:'10vh'
  },
};

const tilesData = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/msseed14th.appspot.com/o/cCkIzMB.jpg?alt=media&token=f04da375-a2b4-4ce2-b4df-561a64aae87f',
    title: '無敵海景第一排套房',
    featured: true,
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/FB!.jpg',
    title: '經濟房',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E5%90%B3%E4%BA%A6%E5%87%A1.jpg',
    title: '宗痛套房',
  },
  {
    img: 'https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/675fb9bf5d8f864bffc7ef982527eaf4265596cb/%E7%A7%91p.jpg',
    title: '背山面海風水好套房',
    featured: true,
  }
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
