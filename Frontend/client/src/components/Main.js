/* eslint-disable react/jsx-props-no-spreading *//* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
/* eslint-disable-next-line */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login/Login';
import signup from './signup/signup';
import dashboard from './Dashboard/dashboard';
import creategroup from './CreateGroup/creategroup';
import mygroups from './Mygroups/mygroups';
import GroupPage from './Grouppage/grouppage';
import Recentactivity from './Recent Activity/recentactivity';
import profilepage from './Profile Page/profilepage';
import landing from './Landing/landing';

// Create a Main Component
class Main extends Component {
  render() {
    return (
      <div>
        {/* Render Different Component based on Route */}

        <Route path="/login" component={Login} />
        <Route path="/signup" component={signup} />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/creategroup" component={creategroup} />
        <Route path="/mygroups" component={mygroups} />
        <Route path="/group/" render={(props) => <GroupPage {...props} />} />
        <Route path="/recentactivity" component={Recentactivity} />
        <Route path="/profilepage" component={profilepage} />
        <Route path="/landing" component={landing} />
      </div>
    );
  }
}
// Export The Main Component
export default Main;
