import React, { Component } from 'react';
import api from '../api'
import marked from 'marked'

class BlogDetail extends Component {
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
        let html = marked(content)
        return (
            <div className="list">
                <div className="list-detail">
                    <h2>{title}</h2>
                    <p>{time}</p>
                    <p>{description}</p>
                    <div className="detailed-content" dangerouslySetInnerHTML = {{__html:html}} />
                    
                </div>
            </div>
        );
    }
}

export default BlogDetail;