import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        if (this.props.isLogin) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Button variant = "secondary" onClick={() => {
                                this.props.history.push('/Mypage')
                            }}>mypage</Button> </Col>
                        <Col>
                            <div>
                                <p />
                                운동을 선택해 주세요!
                                <p />
                                <Button variant = "light" className = 'exercise' onClick={() => {
                                    this.props.history.push('/Start')
                                    this.props.selectExercise(document.querySelector('.exercise').innerHTML)
                                }}>squat</Button>
                                <Button variant = "light" onClick={() => { }}>준비중</Button>
                                <Button variant = "light" onClick={() => { }}>준비중</Button>
                            </div>
                        </Col>
                        <Col> </Col>
                    </Row>
                </Container>
            )
        } else {
            return (
                <div>
                    {this.props.history.push('/Login')}
                </div>
            )
        }
    }
}

export default withRouter(Home)