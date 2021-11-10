import React, { Component } from 'react'
import api from '../api'
import { List, Button } from 'antd';

class BlogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllBlog().then(blog => {
            this.setState({
                blog: blog.data.data,
                isLoading: false,
            }) 
        })
    }

    render() {
        const { blog, isLoading } = this.state

        const deleteBlog = (blog) => {
            if (
                window.confirm(
                    `Do tou want to delete the blog ${blog.title} permanently?`,
                )
            ) {
                api.deleteBlogById(blog._id)
                window.location.reload()
            }
        }
        const updateBlog = (id) => {
            window.location.href = `/blog/update/${id}`
        }

        return (
            <div className="list">
            <List
                className="blog-list"
                itemLayout="vertical"
                dataSource={blog}
                loading={isLoading}
                
                renderItem={item => (
                    <List.Item key={item.title}>
                        <List.Item.Meta
                            title={<a href={`/blog/detail/${item._id}`}>{item.title}</a>}
                            description={item.time}
                        />
                    <p>{item.description}</p>
                    
                    <div className="btns">
                    <Button type="primary" onClick={()=>{updateBlog(item._id)}}>Modify</Button>&nbsp;
                    <Button type="primary" danger onClick={()=>{deleteBlog(item)}}>Delete</Button>
                    
                    </div>
                    </List.Item>
                )}
            />
           
            
            </div>
        )
    }
}

export default BlogList