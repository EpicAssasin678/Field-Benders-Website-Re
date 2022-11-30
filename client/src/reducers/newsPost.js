import {FETCH_ALL, FETCH_POST, CREATE, DELETE} from '../constants/actionTypes';

export default (state = { isLoading: true, newsposts:[] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {...state, isLoading: true};
        case 'END_LOADING':
            return {...state, isLoading: false};
        case FETCH_ALL:
            return {
                ...state,
                newsPost: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_POST: 
            return {...state, post: action.payload.newsPost };
        case CREATE: 
            return { ...state, newsposts: [...state.newsposts, action.payload] };
        case DELETE: 
            return { ...state, newsposts: state.newsposts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
}