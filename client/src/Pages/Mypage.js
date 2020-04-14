import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';


class Mypage extends Component {
  constructor(props) {
    super(props)
    this.signout = this.signout.bind(this);
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
        if(data === 'exist token'){
          localStorage.removeItem('dailySquatToken')
          alert('로그아웃 되었습니다')
        }else{
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
        if(data === ' success secession'){
          localStorage.removeItem('dailySquatToken')
          alert('회원 탈퇴 되었습니다')
        }else{
          alert('탈퇴 실패. 잠시 후 다시 시도해보세요.')
        }
      })
      .catch((err) => err);
  }

  render() {
    console.log('props!!!!!!! : ', this.props);
    const { userInfo, totalCount } = this.props;
    return (
      <Container>
        <Row>
          <Col>
          <Button variant="secondary" onClick={() => {
                this.props.history.push('/Home');
              }}>Home</Button>
          </Col>
          <Col>
            <div>아이디 : {JSON.parse(userInfo).email}</div>
            <div> 회원등록 일자 : {JSON.parse(userInfo).createdAt}</div>
            <p />
            <div>{JSON.parse(userInfo).name}님의 현재 누적 {totalCount}개의 스쿼트를 수행하였습니다</div>
            <p />
            <button onClick={ async () => {
              this.signout();
              this.props.handleSignOut();
              this.props.history.push('/')
            }}>로그아웃</button>
            <button onClick={() => {
              this.secession();
              this.props.handleSignOut();
              this.props.history.push('/') 
            }}>회원탈퇴</button>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    )
  }
}

export default withRouter(Mypage);
