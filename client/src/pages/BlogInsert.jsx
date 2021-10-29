import React, { Component } from 'react'
import api from '../api'
import { Input, Button, DatePicker, Form } from 'antd';

class BlogInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    handleIncludeBlog = async () => {
        const { title, time, description, content } = this.state
        const payload = { title, time, description, content }

        await api.insertBlog(payload).then(res => {
            window.alert(`Blog inserted successfully`)
            this.setState({
                title: '',
                time: '',
                description: '',
                content: '',
            })
            window.location.href = '/blog/list'
        })
    }

    render() {
        const { title, time, description, content } = this.state
        const { TextArea } = Input;
        return (
            <div className="list">
                <Form>
                <h2>Create Blog</h2>
                <p>Title: 
                    <Input
                        type="text"
                        value={title}
                        onChange={this.handleChangeInputTitle}
                /></p>
                <p>Time:
                    <DatePicker 
                    onChange={this.handleChangeInputTime} />
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
                        onChange={this.handleChangeInputContent}/>
                <div className="btns">
                <Button type="primary" onClick={this.handleIncludeBlog}>Add Blog</Button>
                <Button className="btn" type="primary" danger href={'/blog/Form'}>Cancel</Button>
                </div>
                </Form>
            </div>
        )
    }
}

export default BlogInsert