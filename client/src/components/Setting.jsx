import React from 'react';
import { Link, IndexLink } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Logout from 'material-ui/svg-icons/action/exit-to-app';
import ActionGrade from 'material-ui/svg-icons/action/grade';

import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const Setting=()=>(
            <div>
                <div className='container'>
                    <List>
                        <ListItem primaryText="關於我們" leftIcon={<ActionGrade />} />
                        <Divider />
                        <Link to="/logout">
                        <ListItem primaryText="登出" leftIcon={<Logout />} />
                        </Link>
                    </List>      
                </div>
            </div>
        );
        
export default Setting;
