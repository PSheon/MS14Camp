import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Card, CardTitle, CardText } from 'material-ui/Card';


// const Dashboard = ({ secretData }) => (
//   <Card className="container">
//     <CardTitle
//       title="Dashboard"
//       subtitle="You should get access to this page only after authentication."
//     />

//     {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
//   </Card>
// );
class Dashboard extends Component {
  render() {
    return (
      <Card className="container">
        <CardTitle
          title="Dashboard"
          subtitle="You should get access to this page only after authentication."
        />

        {this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.secretData}</CardText>}
        {this.props.room && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.room}</CardText>}
      </Card>
    )
  }
}

// Dashboard.propTypes = {
//   secretData: PropTypes.string.isRequired
// };

function mapStateToProps({ secretData, room }) {
  return { secretData, room };
}

export default connect(mapStateToProps)(Dashboard);
