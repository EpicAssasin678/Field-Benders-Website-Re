import { START_LOADING, END_LOADING, FETCH_POST, FETCH_ALL, DELETE, CREATE } from "../constants/actionTypes";
import * as api from '../api/index.js';

//CREATE ACTIONS -> should follow the standard XMLHTTPRequest operation

export const getNewsPost = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPost(id);
        dispatch({FETCH_POST, payload: { post: data }});
        console.log(`got pots ${data}`);
    } catch (error) {
        console.log(error);
    }
};

export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const {data : {data, currentPage, numberOfPages }} = await api.fetchPosts(page);

        dispatch({ type: FETCH_ALL, payload: { data, currentPage, numberOfPages }});
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createPost = (post, history) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await api.createPost(post);
  
      dispatch({ type: CREATE, payload: data });
  
      history.push(`/posts/${data._id}`);
    } catch (error) {
      console.log(error);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
      await await api.deletePost(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
};
  

