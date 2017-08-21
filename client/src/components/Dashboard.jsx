import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress';
import ChatBotIcon from './ChatBot/ChatBotIcon.jsx';

// const Dashboard = () => (
//   <Card className="container">
//     <CardTitle
//       title="Dashboard"
//       subtitle="You should get access to this page only after authentication."
//     />

//     {this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.secretData}</CardText>}
//   </Card>
// );
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: 20,
    };
  }

  componentDidMount() {
    $socket.on('news', function (data) {
      console.log(data);
      $socket.emit('my other event', { my: 'data' });
    });
  }

  render() {
    return (
      <div>
        <Card className="container">
          <CardTitle
          title="記分板"
          subtitle="如果你看到這行文字代表身分已授權."
          />

          {this.props.secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.secretData}</CardText>}
          {this.props.room && <CardText style={{ fontSize: '16px', color: 'green' }}>{this.props.room}</CardText>}
        </Card>
        <ChatBotIcon />
      </div>
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
