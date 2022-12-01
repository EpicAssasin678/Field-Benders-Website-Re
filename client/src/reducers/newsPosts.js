import {FETCH_ALL, FETCH_POST, CREATE, DELETE} from '../constants/actionTypes';

export default (state = { isLoading: true, newsPosts:[] }, action) => {
    
    switch (action.type) {
        case 'START_LOADING':
            console.log('START_LOADING of reducer called')
            return {...state, isLoading: true};
        case 'END_LOADING':
            return {...state, isLoading: false};
        case FETCH_ALL:
            console.log('FETCH_ALL of reducer called')
            return {
                ...state,
                newsPosts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_POST: 
            return {...state, newsPost: action.payload.newsPost }
        case CREATE: 
            return { ...state, newsPosts: [...state.newsPosts, action.payload] };
        case DELETE: 
            return { ...state, newsPosts: state.newsPosts.filter((newsPost) => newsPost._id !== action.payload) };
        default:
            return state;
    }
};