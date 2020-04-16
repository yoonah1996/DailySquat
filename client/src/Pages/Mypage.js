import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

import styled from 'styled-components';

import image from './image/meghan-holmes-wy_L8W0zcpI-unsplash.jpg';

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



class Mypage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalCount: null
    }

    this.signout = this.signout.bind(this);
  }

  getTotalCount = () => {
    fetch('http://localhost:4000/count/getTotalCount/1', {
      method: 'GET',
      headers: {
        accessToken: JSON.stringify(localStorage.getItem('dailySquatToken')),
      }
    })
      .then((data) => {
        return data.json();
      })
      .then((value) => {
        console.log(value.totalCount)
        this.setState({
          totalCount: value.totalCount
        })
      })
  }

  signout = () => {
    fetch('http://localhost:4000/users/signout', {
      headers: {
        'Content-Type': 'application/json',
        'accessToken': JSON.stringify(localStorage.getItem('dailySquatToken')),
      }
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if (data === 'exist token') {
          localStorage.removeItem('dailySquatToken')
          alert('로그아웃 되었습니다')
        } else {
          alert('로그아웃 실패. 잠시 후 다시 시도해보세요.')
        }
      })
      .catch((err) => err);
  }

  secession = () => {
    fetch('http://localhost:4000/users/secession', {
      headers: {
        'Content-Type': 'application/json',
        'accessToken': JSON.stringify(localStorage.getItem('dailySquatToken')),
      }
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if (data === ' success secession') {
          localStorage.removeItem('dailySquatToken')
          alert('회원 탈퇴 되었습니다')
        } else {
          alert('탈퇴 실패. 잠시 후 다시 시도해보세요.')
        }
      })
      .catch((err) => err);
  }

  componentWillMount() {
    fetch('http://localhost:4000/count/getTotalCount/1', {
      method: 'GET',
      headers: {
        accessToken: JSON.stringify(localStorage.getItem('dailySquatToken')),
      }
    })
      .then((data) => {
        return data.json();
      })
      .then((value) => {
        console.log(value.totalCount)
        this.setState({
          totalCount: value.totalCount
        })
      })
  }

  render() {
    console.log('props!!!!!!! : ', this.props);

    const { userInfo } = this.props;

    return (
      <Background>

        <Container>
          <Row>
            <Col><Button variant="secondary" onClick={() => {
              this.props.history.push('/Home');
            }}>Home</Button></Col>
            <Col>
              <div>아이디 : {JSON.parse(userInfo).email}</div>
              <div> 회원등록 일자 : {JSON.parse(userInfo).createdAt}</div>
              <p />
              <div>{JSON.parse(userInfo).name}님의 현재 누적 {this.state.totalCount}개의 스쿼트를 수행하였습니다</div>
              <p />
              <button onClick={async () => {
                this.signout();
                this.props.handleSignOut();
                this.props.history.push('/')
              }}>로그아웃</button>
              <button onClick={() => {
                let result = window.confirm("탈퇴하시겠습니까?")
                if (result) {
                  this.secession();
                  this.props.handleSignOut();
                  localStorage.clear()
                  this.props.history.push('/')
                }
              }}>회원탈퇴</button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Background>
    )
  }
}

export default withRouter(Mypage);
