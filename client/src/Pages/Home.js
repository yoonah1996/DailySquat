import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'
// import { Container, Row, Col, Button } from 'react-bootstrap';

import styled from 'styled-components';

import image from './image/meghan-holmes-wy_L8W0zcpI-unsplash.jpg';


import './Home.css'

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${image});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    // background: #76b852;
    // background: -webkit-linear-gradient(right, #76b852, #8DC26F);
    // background: -moz-linear-gradient(right, #76b852, #8DC26F);
    // background: -o-linear-gradient(right, #76b852, #8DC26F);
    // background: linear-gradient(to left, #76b852, #8DC26F);
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;  
`;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  

  render() {
    console.log('this.props :', this.props);
    if (this.props.isLogin) {
      return (

        // <Container>
        //   <Row>
        //     <Col>
        //       <Button variant="secondary" onClick={() => {
        //         this.props.getUserInfo();
        //         // this.props.getTotalCount();
        //         this.props.history.push('/Mypage');
        //       }}>mypage</Button> </Col>
        //     <Col>
        //       <div>
        //         <p />
        //         운동을 선택해 주세요!
        //         <p />
        //         <Button variant="light" className='exercise' onClick={() => {
          //           this.props.history.push('/Start')
        //           this.props.selectExercise(document.querySelector('.exercise').innerHTML)
        //         }}>squat</Button>
        //         <Button variant="light" onClick={() => { }}>준비중</Button>
        //         <Button variant="light" onClick={() => { }}>준비중</Button>
        //       </div>
        //     </Col>
        //     <Col> </Col>
        //   </Row>
        // </Container>
        
        <Background>

          <div className="container-box">
            <p href="" alt="" onClick={() => {
                  this.props.history.push('/Start')
                  this.props.selectExercise(document.querySelector('.exercise').innerHTML)
                }}>
              <div className="card-item">
                <div className="card-inner">
                  <i className="fas fa-medal exercise">SQUAT</i>
                  <h1>스쿼트</h1>
                </div>
              </div>
            </p>

            <p href="" alt="" onClick={() => { alert("준비중입니다") }}>
              <div className="card-item">
                <div className="card-inner">
                  <i className="fas fa-medal">LUNGE</i>
                  <h1>런지</h1>
                </div>
              </div>
            </p>

            <p href="" alt="" onClick={() => { alert("준비중입니다") }}>
              <div className="card-item">
                <div className="card-inner">
                  <i className="fas fa-medal">PUSH UP</i>
                  <h1>푸시업</h1>
                </div>
              </div>
            </p>

            <p href="" alt="" onClick={() => {
                this.props.getUserInfo();
                // this.props.getTotalCount();
                this.props.history.push('/Mypage');
              }}>
              <div className="card-item">
                <div className="card-inner">
                <i className="fas fa-medal">MY PAGE</i>
                  <h1>마이페이지</h1>
                </div>
              </div>
            </p>
          </div>
        </Background>
      )
    } else {
      return (
        <div>
          {this.props.history.push('/Login')}
        </div>
      )
    }
  }
}

export default withRouter(Home)