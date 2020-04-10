
// import Mypage from './Mypage'
// import Start from './Start'
import { withRouter } from 'react-router-dom';
// Switch, Route,

import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                Home.js
                <button onClick={()=>{this.props.history.push('/Mypage')}}>Mypage</button>
                {/* <Switch>
                    <Route
                    exact
                        path="/Mypage"
                        render={() => (
                            <Mypage
                            // isLogin={isLogin}
                            // handleIsLoginChange={this.handleIsLoginChange.bind(this)}
                            />
                        )}
                    />
                    <Route
                        path="/Start"
                        render={() => (
                            <Start
                            // isLogin={isLogin}
                            // handleIsLoginChange={this.handleIsLoginChange.bind(this)}
                            />
                        )}
                    />
                </Switch> */}
            </div>
        )
    }
}

export default withRouter(Home)

