import * as tmPose from '@teachablemachine/pose';
import './Ing.css';
import React, { Component } from 'react'
import Result from './Result'
import { withRouter } from 'react-router-dom';


class Ing extends Component {
    constructor(props) {
        super(props)

        this.state = {
         count : 0,
         status : null
        }
        
        this.handleCount = this.handleCount.bind(this)
        this.handleStatus = this.handleStatus.bind(this)
    }
    
    // handleCount(){
        //    this.setState({
            //         count : this.state.count +1
            
            //     })
            // }
            
            handleCount(count){
                this.setState({
                    count : count
                    
                })
            }
            handleStatus(status){
                this.setState({
                    status : status
                })
            }
            
            
            
            render() {
                // const {count, status} = this.state
        const URL = "https://teachablemachine.withgoogle.com/models/H0Lk1SskY/";
        let model, webcam, ctx, labelContainer, maxPredictions;
        async function init() {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";
            // load the model and metadata
            // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
            // Note: the pose library adds a tmPose object to your window (window.tmPose)
            model = await tmPose.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();
            // Convenience function to setup a webcam
            const size = 500;
            const flip = false; // whether to flip the webcam
            webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
            await webcam.setup(); // request access to the webcam
            await webcam.play();
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
        async function loop(timestamp) {
            webcam.update(); // update the webcam frame
            await predict();
            window.requestAnimationFrame(loop);
        }

        // let status = 'stand'
        let count = 0;
        // count 변수 없이 setState함수에다 바로 +1해주게되면 랜더가2번일어나면서 스쿼트가2개씩증가하는것 같아서
        //render내부에서 카운팅을 해준것만 setstate로 넘겨주게되면 해결됌.
        // console.log(this.state.status)
        // console.log(this.state.count)
       
        
       let predict = async() => {
            // Prediction #1: run input through posenet
            // estimatePose can take in an image, video or canvas html element
            const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
            // Prediction 2: run input through teachable machine classification model
            const prediction = await model.predict(posenetOutput);
            //가능성을 나타내는 함수
            if(prediction[0].probability.toFixed(2) > 0.80) {
                if(this.state.status === 'squat'){
                    count++
                    this.handleCount(count)

                    // this.props.handleCounting(count)
                    
                }
                // status = 'stand'
                this.handleStatus('stand')
                
            } else if(prediction[1].probability.toFixed(2) > 0.80){
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
                    <button className="button" onClick={() => {
                        this.props.handleCounting(this.state.count)
                        this.props.history.push('/Result')
                    }}>완료</button>
                </div>

                <div id="counter">{this.state.count}/</div>
               
                


            </div>
        )
    }
}

export default withRouter(Ing)




