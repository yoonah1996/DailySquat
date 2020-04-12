/* eslint-disable no-unused-vars */
// import React from 'react';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Ing from './Pages/Ing';
import Mypage from './Pages/Mypage';
import Result from './Pages/Result';
import Start from './Pages/Start';

import { Switch, Route, Redirect} from 'react-router-dom';

import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: true,
      count : 0

    }
  }
  handleCounting(count){
    this.setState({
      count : count
    })
    console.log("this is app.js state",this.state.count)
 }

  // handleIsLoginChange() {
  //   this.setState({ isLogin: true });
  //   axios.get('http://localhost:4000/user').then(res => {
  //     console.log(res.data);
  //     this.setState({ userinfo: res.data });
  //   });
  // }

  render() {
    return (
      <div>
      
          <Switch>
            <Route path="/Login" render={() => (<Login // isLogin={isLogin} // handleIsLoginChange={this.handleIsLoginChange.bind(this)}
            />)} />
            <Route exact path="/Home" render={() => <Home />} />

            <Route exact path="/Mypage" render={() => <Mypage />} />

            <Route exact path="/Start" render={() => <Start />} />

            <Route exact path="/Ing" render={() => <Ing handleCounting={this.handleCounting.bind(this)}/>} />

            <Route exact path="/Result" render={() => <Result />} />

            <Route
              path="/"
              render={() => {
                // if (this.state.isLogin) {
                //   return <Home />;
                // }
                return <Login />;
              }}
            />
          </Switch>
       

      </div>
    )
  }
}

export default App

// if (this.state.isLogin) {
//   return <Redirect to = "/Home" />;
// }

