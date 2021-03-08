/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
// eslint-disable-next-line
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Login from './Login/Login';
import signup from './signup/signup';
// Create a Main Component
class Main extends Component {
  render() {
    return (
      <div>
        {/* Render Different Component based on Route */}

        <Route path="/login" component={Login} />
        <Route path="/signup" component={signup} />

      </div>
    );
  }
}
// Export The Main Component
export default Main;
