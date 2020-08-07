import React, { Component } from 'react';
import { render } from 'react-dom';
import {Route,Redirect} from 'react-router-dom'
import Home from './Home/home'
import ImageView from './ImageView/imageview'

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [] 
    };
  }

  render() {
    return (
      <div>
         <Route exact path='/home/:id' component={ImageView}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path="/">
    <Redirect to="/home" />
</Route>
       
      </div>
    );
  }
}

export default App
