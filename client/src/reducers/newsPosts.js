import {FETCH_ALL_NEWSPOSTS, FETCH_NEWSPOST, CREATE_NEWSPOST, DELETE_NEWSPOST} from '../constants/actionTypes';

const newsPosts =(state = { isLoading: true, newsPosts:[] }, action) => {
    
    switch (action.type) {
        case 'START_LOADING':
            console.log('POST REDUCERS: STARTED LOADING');
            return { ...state, isLoading: true };
        case 'END_LOADING':
            console.log('POST REDUCERS: ENDED LOADING');
            return { ...state, isLoading: false };
        case FETCH_ALL_NEWSPOSTS:
            console.log('FETCH_ALL of reducer called')
            return {
                ...state,
                newsPosts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case FETCH_NEWSPOST: 
            return {...state, newsPost: action.payload.newsPost }
        case CREATE_NEWSPOST: 
            return { ...state, newsPosts: [...state.newsPosts, action.payload] };
        case DELETE_NEWSPOST: 
            return { ...state, newsPosts: state.newsPosts.filter((newsPost) => newsPost._id !== action.payload) };
        default:
            return state;
    }
};

export default newsPosts;