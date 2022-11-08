import axios from 'axios';


const url = 'http://localhost:5000/posts';
//const port = process.env.PORT;
//const url = 'http://localhost:3000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);

