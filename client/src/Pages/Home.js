import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

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
                            <button onClick={() => {
                                this.props.history.push('/Mypage')
                            }}>mypage</button> </Col>
                        <Col>
                            <div>
                                <p />
                                운동을 선택해 주세요!
                                <p />
                                <button className = 'exercise' onClick={() => {
                                    this.props.history.push('/Start')
                                    this.props.selectExercise(document.querySelector('.exercise').innerHTML)
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
                    {this.props.history.push('/Login')}
                </div>
            )
        }
    }
}

export default withRouter(Home)