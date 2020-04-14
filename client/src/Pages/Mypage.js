import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


class Mypage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
      const {userInfo, totalCount} = this.props;
      

      console.log(this.props);
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div>아이디 : {JSON.parse(userInfo).email}</div>
                        <div> 회원등록 일자 : {JSON.parse(userInfo).createdAt}</div>
                        <p />
                        <div>{JSON.parse(userInfo).name}님의 현재 누적 {totalCount}개의 스쿼트를 수행하였습니다</div>
                        <p />
                        <button onClick={() => { this.props.history.push('/') }}>로그아웃</button>
                        <button onClick={() => { this.props.history.push('/') }}>회원탈퇴</button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(Mypage);
