import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import NavBar from './navbar';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">微軟 14 領袖營</IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/Npc">任務頁</Link>
          <Link to="/logout">登出</Link>
        </div>
      ) : (
          <div className="top-bar-right">
            <Link to="/login">登入</Link>
            <Link to="/signup">註冊</Link>
          </div>
        )}

    </div>

    { /* child component will be rendered here */}
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
