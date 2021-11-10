import React, { Component } from 'react'
import api from '../api'
import { Input, Button, DatePicker, Form } from 'antd';
import moment from 'moment';
import 'antd/dist/antd.css';

class BlogUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            time: '',
            description: '',
            content: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputTime = (date,dateString) => {
        const time = dateString
        this.setState({ time })
    }

    handleChangeInputDes = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    handleChangeInputContent = async event => {
        const content = event.target.value
        this.setState({ content })
    }

    handleUpdateBlog = async () => {
        const { id, title, time, description, content } = this.state
        const payload = { title, time, description, content }

        await api.updateBlogById(id, payload).then(res => {
            window.alert(`Blog updated successfully`)
            this.setState({
                title: '',
                time: '',
                description: '',
                content: '',
            })
            window.location.href = '/blog/list'
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const blog = await api.getBlogById(id)

        this.setState({
            title: blog.data.data.title,
            time: blog.data.data.time,
            description: blog.data.data.description,
            content: blog.data.data.content,
        })
    }

    render() {
        const { title, time, description, content } = this.state
        const { TextArea } = Input;
        return (
            <div className="list">
                <Form>
                <h2>Update Blog</h2>

                <p>Title: 
                    <Input
                        type="text"
                        value={title}
                        onChange={this.handleChangeInputTitle}
                /></p>

                <p>Time: 
                    <DatePicker onChange={this.handleChangeInputTime} 
                    defaultValue={moment(time, 'YYYY-MM-DD')} format='YYYY-MM-DD' />
                 </p>

                 <p>Description: </p>
                    <TextArea rows={1} 
                        showCount maxLength={100}
                        value={description}
                        onChange={this.handleChangeInputDes}
                />

                <p>Content: </p>
                    <TextArea rows={4} 
                        value={content}
                        showCount maxLength={500}
                        width={80}
                        onChange={this.handleChangeInputContent}/>
                <div className="btns">
                <Button type="primary" onClick={this.handleUpdateBlog}>Update Blog</Button>
                <Button className="btn" type="primary" danger href={'/blog/list'}>Cancel</Button>
                </div>
                </Form>
            </div>
        )
    }
}

export default BlogUpdate