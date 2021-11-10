import React, { Component } from 'react'
import { GithubOutlined } from '@ant-design/icons';
import '../style/pages.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span className="intro">
                    <p className="top-footer">Create by React, NodeJS, MongoDB, Express, Antd</p>
                    <p><a className="git" href="https://github.com/zemeigit"><GithubOutlined /></a>
                    codeLearning.com</p>
                </span>
            </div>
        )
    }
}

export default Footer