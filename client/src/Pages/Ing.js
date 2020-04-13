import * as tmPose from '@teachablemachine/pose';
import './Ing.css';
import React, { Component } from 'react'
// import Result from './Result'
import { withRouter } from 'react-router-dom';

var count = 0;

class Ing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: null,
            webCam: false
        }

        this.handleStatus = this.handleStatus.bind(this)
        this.handleWebCam = this.handleWebCam.bind(this)
    }

    // componentWillUnmount(e) {
    //     console.log("ing.js is unmounted")
    //     window.location.reload()

    // }


    handleStatus(status) {
        this.setState({
            status: status
        })
    }
    handleWebCam(status) {
        this.setState({
            webCam: true
        })
    }


    render() {


        const URL = "https://teachablemachine.withgoogle.com/models/H0Lk1SskY/";
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        let model, webcam, ctx, labelContainer, maxPredictions;
        const size = 500;
        const flip = true; // whether to flip the webcam
        webcam = new tmPose.Webcam(size, size, flip); // width, height, flip

        let init = async () => {

            model = await tmPose.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();
            // load the model and metadata
            // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
            // Note: the pose library adds a tmPose object to your window (window.tmPose)

            // Convenience function to setup a webcam

            await webcam.setup(); // request access to the webcam
            await webcam.play();
            console.log("1")
            window.requestAnimationFrame(loop);
            // append/get elements to the DOM
            const canvas = document.getElementById("canvas");
            canvas.width = size; canvas.height = size;
            ctx = canvas.getContext("2d");
            labelContainer = document.getElementById("label-container");
            for (let i = 0; i < maxPredictions; i++) { // and class labels
                labelContainer.appendChild(document.createElement("div"));
            }

        }
        let loop = async (timestamp) => {
            webcam.update(); // update the webcam frame
            await predict();
            if (!!this.state.webCam) {
                return await webcam.stop();
            }
            window.requestAnimationFrame(loop);
        }
        //  console.log(count)

        let predict = async () => {
            // Prediction #1: run input through posenet
            // estimatePose can take in an image, video or canvas html element
            const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
            // Prediction 2: run input through teachable machine classification model
            const prediction = await model.predict(posenetOutput);
            //가능성을 나타내는 함수
            if (prediction[0].probability.toFixed(2) > 0.80) {
                if (this.state.status === 'squat') {
                    count++

                    console.log("this is ing.js state=>count", count)
                }
                // status = 'stand'
                this.handleStatus('stand')

            } else if (prediction[1].probability.toFixed(2) > 0.80) {
                // status = 'squat'
                this.handleStatus('squat')

            }
            for (let i = 0; i < maxPredictions; i++) {
                const classPrediction =
                    prediction[i].className + ": " + prediction[i].probability.toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
            }
            // finally draw the poses
            drawPose(pose);
        }
        function drawPose(pose) {
            if (webcam.canvas) {
                ctx.drawImage(webcam.canvas, 0, 0);
                // draw the keypoints and skeleton
                if (pose) {
                    const minPartConfidence = 0.5;
                    tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                    tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
                }
            }
        }

        return (
            <div>
                <div id="leftside">
                    <h1>Ing.js</h1>

                    <div><canvas id="canvas"></canvas></div>
                    <div id="label-container"></div>
                    <button className="button" type="button" onClick={init}>시작</button>
                    <button className="button" onClick={async (e) => {
                        // e.preventDefault()
                        await this.handleWebCam();
                        this.props.handleCounting(count)
                        fetch('http://localhost:4000/count/saveCount', {
                            method: 'POST',
                            body: JSON.stringify({
                                categoryId: "1",
                                count: count
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                                'accessToken': JSON.stringify(localStorage.getItem('dailySquatToken')),
                            }
                        })
                        this.props.history.push('/Result')

                    }}>완료</button>
                </div>

                <div id="counter">{count}/100</div>




            </div>
        )
    }
}

export default withRouter(Ing)




