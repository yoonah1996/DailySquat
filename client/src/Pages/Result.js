import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';


function Result(props) {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs = {7}>
                    <Alert variant="success">
                        <Alert.Heading>Success</Alert.Heading></Alert>
                    <p />
                    <Alert variant="secondary">방금 총 {props.count}개의 스쿼트를 수행했습니다!<p/>
                    총 {props.count * 0.5}칼로리를 소모하였습니다.<p/>
                    자세한 정보는 Mypage에서 확인하실 수 있습니다.</Alert>
                    <p />
                    <button onClick={() => { props.history.push('/Mypage') }}>Mypage</button>
                    <button onClick={() => { props.history.push('/Home') }}>Home</button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default withRouter(Result);
