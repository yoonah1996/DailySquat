import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col, ToggleButtonGroup, ToggleButton, Alert, Button, InputGroup, FormControl } from 'react-bootstrap';
import './StartScc.css';
import styled from 'styled-components';

import image from './image/chase-kinney-FMQBLyhD2HU-unsplash.jpg';

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${image});
    background-color: rgba( 255, 255, 255, 0.5 );
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

const Center = styled.div`
    display: flex; 
    height: 100%; 
    justify-content: center; 
    align-items: center;
    background-color: rgba( 255, 255, 255, 0.5 );
    padding: 30px;
        font-weight: bold;
        text-align: center;

`;

function Start(props) {
    const [show, setShow] = useState(true);
    const [deshow, desetShow] = useState(false);
    return (

        <Background>
            <Center>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col md='center' >
                            {/* <div className="buttons buttons2">
                                <button type="button" className="button6">선택해 주세요</button>
                            </div> */}
                            <Alert show={show}  ><Alert.Heading>세트 당 수행 횟수를 입력하고 시작 버튼을 누르세요!</Alert.Heading></Alert>
                            <Alert show={show}  >
                                <ToggleButtonGroup name='selectCo' type="radio" onChange={(value) => {
                                    let countArr = value.split('/');
                                    localStorage.setItem('goalCount', countArr[0])
                                    localStorage.setItem('goalSet', countArr[1])
                                }}>
                                    <ToggleButton variant="secondary" value='20/3' size="lg">20개 / 3세트</ToggleButton>
                                    <ToggleButton variant="secondary" value='30/4' size="lg">30개 / 4세트</ToggleButton>
                                    <ToggleButton variant="secondary" value='50/5' size="lg">50개 / 5세트</ToggleButton>
                                    <ToggleButton variant="secondary" value='/' size="lg" onClick={() => {
                                        setShow(false)
                                        desetShow(true)
                                    }}>지정하기</ToggleButton>
                                </ToggleButtonGroup>
                            </Alert>


                            <Alert show={deshow} >
                                <p />
                                <InputGroup size="lg" className="mb-3">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">갯수를 정해주세요</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="한 세트당 갯수"
                                        className="CountAdd"
                                        onChange={() => {
                                            localStorage.setItem('goalCount', document.querySelector('.CountAdd').value)                               // props.selectCount(document.querySelector('.countAdd').value)
                                        }}
                                    />
                                    <FormControl
                                        placeholder="세트 갯수"
                                        className="setCountAdd"
                                        onChange={() => {
                                            localStorage.setItem('goalSet', document.querySelector('.setCountAdd').value)                                // props.selectCount(document.querySelector('.countAdd').value)
                                        }}
                                    />
                                    <Button variant="outline-secondary" onClick={() => {
                                        setShow(true)
                                        desetShow(false)
                                    }}>뒤로
                                </Button>
                                </InputGroup>

                            </Alert>


                            <p />
                            <Button variant="secondary" size="lg" onClick={() => {
                            if ((localStorage.getItem('goalCount') > 0) && (localStorage.getItem('goalSet') > 0)) {
                                props.history.push('/Ing')
                            } else {
                                alert('스쿼트 갯수를 선택해 주세요!')
                            }
                        }}>Start</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Center>
        </Background>
    )
}

export default withRouter(Start);
