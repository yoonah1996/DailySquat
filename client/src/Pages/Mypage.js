import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


class Mypage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo : null
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div>아이디 :</div>
                        <div> 회원등록 일자 : </div>
                        <p />
                        <div>-님의 현재 누적 -개의 스쿼트를 수행하였습니다</div>
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
