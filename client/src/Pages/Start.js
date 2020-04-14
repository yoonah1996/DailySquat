import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, ToggleButtonGroup, ToggleButton, Alert, Button, InputGroup, FormControl } from 'react-bootstrap';


function Start(props) {
    const [show, setShow] = useState(true);
    const [deshow, desetShow] = useState(false);
    return (

        <Container>
            <Row>
                <Col></Col>
                <Col md='center' >
                    <Alert show={show} variant="secondary" ><Alert.Heading>세트 당 수행 횟수를 입력하고 시작 버튼을 누르세요!</Alert.Heading>
                        <ToggleButtonGroup name='selectCo' type="radio" onChange = {(value) => localStorage.setItem('goalCount',value)} >
                            <ToggleButton variant="secondary" value='30' size="lg">30개</ToggleButton>
                            <ToggleButton variant="secondary" value='50' size="lg">50개</ToggleButton>
                            <ToggleButton variant="secondary" value='100' size="lg">100개</ToggleButton>
                            <ToggleButton variant="secondary"  size="lg" onClick={() => {
                                setShow(false)
                                desetShow(true)
                            }}>지정하기</ToggleButton>
                        </ToggleButtonGroup>
                    </Alert>


                    <Alert show={deshow} variant="secondary" >
                        <p/>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">갯수를 정해주세요</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            className="countAdd"
                            onChange={() =>{
                                localStorage.setItem('goalCount', document.querySelector('.countAdd').value)
                                // props.selectCount(document.querySelector('.countAdd').value)
                            }}
                            />
                        </InputGroup>
                    </Alert>


                    <p />
                    <Button variant="secondary" onClick={() => {
                        if (!!localStorage.getItem('goalCount')) {
                            props.history.push('/Ing')
                        } else {
                            alert('스쿼트 갯수를 선택해 주세요!')
                        }
                    }}>Start</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container >
    )
}

export default withRouter(Start);
