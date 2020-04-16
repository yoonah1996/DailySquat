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
                        <ToggleButtonGroup name='selectCo' type="radio" onChange = {(value) => {
                            let countArr = value.split('/');
                            localStorage.setItem('goalCount', countArr[0])
                            localStorage.setItem('goalSet', countArr[1])
                            }}>
                            <ToggleButton variant="secondary" value='10/3' size="lg">10개 3세트</ToggleButton>
                            <ToggleButton variant="secondary" value='10/5' size="lg">10개 5세트</ToggleButton>
                            <ToggleButton variant="secondary" value='10/10' size="lg">10개 10세트</ToggleButton>
                            <ToggleButton variant="secondary" value='1/1' size="lg" onClick={() => {
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
                            placeholder="한 세트당 갯수"
                            className="CountAdd"
                            onChange={() =>{
                                localStorage.setItem('goalCount', document.querySelector('.CountAdd').value)                               // props.selectCount(document.querySelector('.countAdd').value)
                            }}
                            />
                            <FormControl
                            placeholder="세트 갯수"
                            className="setCountAdd"
                            onChange={() =>{
                                localStorage.setItem('goalSet', document.querySelector('.setCountAdd').value)                                // props.selectCount(document.querySelector('.countAdd').value)
                            }}
                            />
                        </InputGroup>
                    </Alert>


                    <p />
                    <Button variant="secondary" onClick={() => {
                        if ((localStorage.getItem('goalCount') > 0 ) && (localStorage.getItem('goalSet') > 0 )) {
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
