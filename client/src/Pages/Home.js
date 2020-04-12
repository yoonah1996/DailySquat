import { withRouter } from 'react-router-dom';
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


function Home(props) {
    if (props.isLogin) {
        return (
            <Container>
                <Row>
                    <Col>
                        <button onClick={() => {
                            props.history.push('/Mypage')
                        }}>mypage</button> </Col>
                    <Col>
                        <div>
                            <p />
                            운동을 선택해 주세요!
                                <p />
                            <button className='exercise' onClick={() => {
                                props.history.push('/Start')
                                props.selectExercise(document.querySelector('.exercise').innerHTML)
                            }}>squat</button>
                            <button onClick={() => { }}>준비중</button>
                            <button onClick={() => { }}>준비중</button>
                        </div>
                    </Col>
                    <Col> </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <div>
                {props.history.push('/Login')}
            </div>
        )
    }
}



    export default withRouter(Home)