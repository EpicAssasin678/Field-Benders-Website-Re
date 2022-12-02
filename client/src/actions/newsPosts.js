import { START_LOADING, END_LOADING, FETCH_NEWSPOST, FETCH_ALL_NEWSPOSTS, DELETE_NEWSPOST, CREATE_NEWSPOST } from "../constants/actionTypes";
import * as api from '../api/index.js';

//CREATE ACTIONS -> should follow the standard XMLHTTPRequest operation

export const getNewsPost = (id) => async (dispatch) => {
    try {
        console.log('actions: action getNewsPost was called');

        dispatch({ type: START_LOADING })
        const { data } = await api.fetchNewsPost(id);
        dispatch({type: FETCH_NEWSPOST, payload: { newsPost: data }});
        console.log(`got post ${data}`);
    } catch (error) {
        console.log(error);
    }
};

export const getNewsPosts = (page) => async (dispatch) => {
    try {
        console.log('actions: action getNewsPosts was called');

        dispatch({ type: START_LOADING });
        const {data : {data, currentPage, numberOfPages }} = await api.fetchNewsPosts(page);
        
        dispatch({ type: FETCH_ALL_NEWSPOSTS, payload: { data, currentPage, numberOfPages }});
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createNewsPost = (newsPost, history) => async (dispatch) => {
    try {
      console.log('actions: action createNewsPosts was called');

      dispatch({ type: START_LOADING });
      const { data } = await api.createNewsPost(newsPost);
  
      dispatch({ type: CREATE_NEWSPOST, payload: data });
  
      history.push(`/newsPosts/${data._id}`);
    } catch (error) {
      console.log(error);
    }
};

export const deleteNewsPost = (id) => async (dispatch) => {
    try {
      console.log('actions: action deleteNewsPost was called');

      await await api.deletePost(id);
  
      dispatch({ type: DELETE_NEWSPOST, payload: id });
    } catch (error) {
      console.log(error);
    }
};
  

