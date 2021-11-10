import React, { Component } from 'react'
import { Carousel } from 'antd';
import NodeJsImg from '../style/imgs/node.png'
import ReactImg from '../style/imgs/logo512.png'
import MongoDBImg from '../style/imgs/mongo.png'
import AWSImg from '../style/imgs/aws1.png'
import JenkinsImg from '../style/imgs/jenkins.png'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="main">
                <Carousel autoplay>
                    <div className="main-div">
                    <img src={NodeJsImg} width="60%" height="auto" alt="zemei" />
                    </div>
                    <div className="main-div">
                    <img src={ReactImg} width="30%" alt="zemei" />
                    </div>
                    <div className="main-div">
                    <img src={AWSImg} width="40%" alt="zemei" />
                    </div>
                    <div className="main-div">
                    <img src={MongoDBImg} width="105%" alt="zemei" />
                    </div>
                    <div className="main-div">
                    <img src={JenkinsImg} width="50%" alt="zemei" />
                    </div>
                </Carousel>
            </div>
        )
    }
}