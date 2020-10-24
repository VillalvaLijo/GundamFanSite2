
import './App.css';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import WingHome from '../GundamWing/WingHome'
import IronBloodedHome from '../IronBlooded/IronBloodedHome';
import UCHome from '../UC/UCHome';

import Nav from '../Nav/Nav';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Nav/>
        <h1>Gundam Website</h1>
      </header> */}
      <Router>
        <Switch>
          {/*Visiting url/ will redirect to url/home */}
          {/* <Redirect exact from ="/" to="/home" /> */}
          <Route
            exact path = "/GundamWing"
            component={WingHome}
          />
          <Route exact path = "IronBloodedOrphans" component= {IronBloodedHome} />
          <Route exact path= "UC" component = {UCHome}/>
                        

        </Switch>
      </Router>
    </div>
  );
}

export default App;
