import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import newsPosts from './newsPosts';

export const reducers = combineReducers({ posts, newsPosts, auth });


