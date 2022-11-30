import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import newsPost from './newsPost';

export const reducers = combineReducers({ posts, newsPost, auth });


