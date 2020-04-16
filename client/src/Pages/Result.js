import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';


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

function Result(props) {
    return (
        <Background>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={7}>
                        <Alert variant="success">
                            <Alert.Heading>Success</Alert.Heading></Alert>
                        <p />
                        <Alert variant="secondary">방금 총 {props.count}개의 스쿼트를 수행했습니다!<p />
                    총 {props.count * 0.5}칼로리를 소모하였습니다.<p />
                    자세한 정보는 Mypage에서 확인하실 수 있습니다.</Alert>
                        <p />
                        <button onClick={() => { props.history.push('/Mypage') }}>Mypage</button>
                        <button onClick={() => { props.history.push('/Home') }}>Home</button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </Background>
    )
}

export default withRouter(Result);
