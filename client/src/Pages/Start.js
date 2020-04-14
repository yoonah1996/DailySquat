import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

function Start(props) {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <div>세트 당 수행 횟수를 입력하고 시작 버튼을 누르세요!</div>
                    <ToggleButtonGroup name = 'selectCo'  type="radio"  onChange = {(value) => localStorage.setItem('goalCount',value)} >
                    <ToggleButton value='30'>30개</ToggleButton>
                    <ToggleButton value='50'>50개</ToggleButton>
                    <ToggleButton value='100'>100개</ToggleButton>
                    </ToggleButtonGroup>
                    <p />
                    <button onClick={() => { props.history.push('/Ing') }}>Start</button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default withRouter(Start);
