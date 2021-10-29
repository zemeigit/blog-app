import React, { Component } from 'react'
import { Carousel } from 'antd';
import NodeJsImg from '../style/imgs/node.png'
import ReactImg from '../style/imgs/logo192.png'
import MongoDBImg from '../style/imgs/mongo.png'
import AWSImg from '../style/imgs/aws1.png'
import JenkinsImg from '../style/imgs/jenkins.png'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="main">
                <Carousel autoplay>
                    <div className="main-div">
                    <img src={NodeJsImg} width="60%" height="auto" />
                    </div>
                    <div className="main-div">
                    <img src={ReactImg} />
                    </div>
                    <div className="main-div">
                    <img src={AWSImg} width="60%"/>
                    </div>
                    <div className="main-div">
                    <img src={MongoDBImg} />
                    </div>
                    <div className="main-div">
                    <img src={JenkinsImg} width="60%"/>
                    </div>
                </Carousel>
            </div>
        )
    }
}