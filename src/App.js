import React, { Component } from 'react';
import { Link, Route, BrowserRouter, HashRouter} from 'react-router-dom';
import { Router, Switch } from 'react-router'
import Home from './Views/Home/Home'
class App extends Component {
  render() {
    return (
      <HashRouter>
          <div>
            <Route exact path="/" component={Home}/>
          </div>
      </HashRouter>
    );
  }
}

export default App;
