import axios from 'axios'

const api = axios.create({
    baseURL: 'http://3.15.146.225:3000/api',
})

export const insertBlog = payload => api.post(`/blog`, payload)
export const getAllBlog = () => api.get(`/blog`)
export const updateBlogById = (id, payload) => api.put(`/blog/${id}`, payload)
export const deleteBlogById = id => api.delete(`/blog/${id}`)
export const getBlogById = id => api.get(`/blog/${id}`)

const apis = {
    insertBlog,
    getAllBlog,
    updateBlogById,
    deleteBlogById,
    getBlogById,
}

export default apis