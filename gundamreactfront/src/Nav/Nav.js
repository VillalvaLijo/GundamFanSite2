import {
    HashRouter as Router,
    Route,
    Redirect,
    Switch,
  } from 'react-router-dom';
import { Component } from 'react';

import WingHome from '../GundamWing/WingHome'

  class Nav extends Component {

    render(){
        return (
            <Router>
                    <Switch>
                        {/*Visiting url/ will redirect to url/home */}
                        {/* <Redirect exact from ="/" to="/home" /> */}
                        <Route
                            exact path = "/GundamWing"
                            component={WingHome}
                        />
                    

                        

                    </Switch>
            </Router>
        )
    }
  }

  export default Nav;