import axios from 'axios';

const url = 'http://clocalhost:5000/posts';

export const fetchPosts = () => axios.get(url);
