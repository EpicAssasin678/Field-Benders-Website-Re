import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  console.log(state);
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.ADMINAUTH: 
      console.log('ADMINAUTH reducer called');
      localStorage.setItem('adminProfile', JSON.stringify({...action?.data, verified: true}));

      return { ...state, authData: action.data, loading: false, errors: null} ;
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
