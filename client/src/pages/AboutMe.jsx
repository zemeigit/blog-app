import React, { Component } from 'react'
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

export default class AboutMe extends Component {
    
    render() {
       return (
           <div className='timeline'>
               <Timeline mode="alternate">
               <Timeline.Item label="2012-09">Start Bachelor of Engineering study in University of South China</Timeline.Item>
                <Timeline.Item color="green" label="2016-09">Start Master of Engineering study in Concordia University</Timeline.Item>
                <Timeline.Item label="2019-01">Start work in Nuance Communication</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Tech Stack: JavaScript, RESTful API, Python...
                </Timeline.Item>
                <Timeline.Item label="2021-08">Start work in Manulife</Timeline.Item>
                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Tech Stack: NodeJS, React, MongoDB...
                </Timeline.Item>
                <Timeline.Item color="green">Next Step...?</Timeline.Item>
            </Timeline>
        </div>  
        )
    }
}