import { AUTH, ADMINAUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }

};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signAdminIn = (formData, router) => async (dispatch) => {
  try {
    console.log('signAdminIn action called');
    console.log(formData);
    const { data } = await api.signAdminIn(formData);
    console.log(data);
    dispatch({ type: ADMINAUTH, data });
  } catch (error) {
    console.log(error);
  }
}