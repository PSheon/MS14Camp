import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const form = {
  backgroundColor: 'rgba(255,255,255,0)',
  borderRadius: '4px',
  padding: '10px' 
}
const bottomText = {
  width: '100%',
  
}
const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  user
}) => (   
    <div style={style.wrapper}>
      <div style={style.container}>
          <form className="center-align" style={form} action="/" onSubmit={onSubmit}>
          <h5>歡迎回來阿勇敢的騎士！</h5>

          {successMessage && <p className="success-message center-align">{successMessage}</p>}
          {errors.summary && <p className="error-message center-align">{errors.summary}</p>}

          <div >
            <TextField
              floatingLabelText="信箱"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
              />
            </div>

            <div>
              <TextField
                floatingLabelText="密碼"
                type="password"
                name="password"
                onChange={onChange}
                errorText={errors.password}
                value={user.password}
              />
            </div>

            <div>
              <RaisedButton type="submit" label="登入" primary />
            </div>

            <p style={bottomText} className="center-align">還沒有帳號？ <Link to={'/signup'}>創建一個</Link>.</p>
          </form>
        </div>
        <img src='https://raw.githubusercontent.com/ChaoTzuJung/pictureAll/master/dinosaur.png' style={style.dinosaur} />
      </div>
  );
const style = {
  wrapper: {
    backgroundColor:'#D2F3FF',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',//左右
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
    position: 'relative',
    bottom: '50px',
    zIndex: '2'
  },
  dinosaur:{
    height: '40vh',
    width: '100vw',
    position: 'absolute',
    right: '50%',
    bottom: 0,
    transform: 'translate(50%, 0%)',
    verticalAlign: 'middle',
  }
}
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  successMessage: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
