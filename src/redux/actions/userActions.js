import { USER, USER_SUCCESS, USER_FAILURE } from '../types';
import userService from '../../services/userService';

export const getUser = (document, cellphone) => async (dispatch) => {
  dispatch({ type: USER });
  try {
    const response = await userService.getUser();
    console.log(response);
    dispatch({
      type: USER_SUCCESS,
      payload: {
        userName: response.data.name,
        userLastName: response.data.lastName,
        userDocument: document,
        userPhone: cellphone,
        userBirthday: response.data.birthDay,
      },
    });
  } catch (error) {
    dispatch({ type: USER_FAILURE, error: error.message });
  }
};
