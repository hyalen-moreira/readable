import axios from 'axios';

const api = "http://localhost:3001"

// Set authorization header
// Generate a unique token
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

// Set the header values
const AUTH_HEADERS = {
    'Accept': 'application/json',
    'Authorization': token,
}

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

// --------- Categories
// Fetch categories
export const fetchCategories = () => (
    axios.get(`${api}/categories`)
)

// --------- Posts
// Fetch posts
export const fetchPosts = () => (
    axios.get(`${api}/posts`)
)

// Post detail
export const getPostDetail = (id) => (
    axios.get(`${api}/posts/${id}`)
)

// Posts by category id
export const fetchPostsByCategoryId = (categoryId) => (
    axios.get(`${api}/${categoryId}/posts`)
)

// Vote post
export const votePost = (postId, option) => (
    axios.post(`${api}/posts/${postId}`, {option:option})
)

export const deletePost = postId => (
    axios.delete(`${api}/posts/${postId}`)
)

// --------- Comments
// Comments by post id
export const fetchCommentsByPostId = (id) => (
    axios.get(`${api}/posts/${id}/comments`)
)

// Vote comment
export const voteComment = (commentId, option) => (
    axios.post(`${api}/comments/${commentId}`, {option:option})
)

// Delete comment
export const deleteComment = commentId => (
    axios.delete(`${api}/comments/${commentId}`)
)