import { USER, USER_SUCCESS, USER_FAILURE } from '../types';

const initialState = {
  //userName: localStorage.getItem('user'),
  userName: '',
  userLastName: '',
  userDocumentType: '',
  userDocument: '',
  userPhone: '',
  userBirthday: '',
  states: {
    loading: false,
    success: false,
    error: false,
  },
};

const userReducer = (state = initialState, action) => {
  //debugger;
  switch (action.type) {
    /*case FETCH_POSTS:
            return action.payload;*/
    case USER:
      return {
        ...state, // hacemos una copia del estado porque no es mutable
        states: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case USER_SUCCESS: {
      const {
        userName,
        userLastName,
        userDocumentType,
        userDocument,
        userPhone,
        userBirthday,
      } = action.payload;
      return {
        ...state,
        states: {
          loading: false,
          success: true,
          error: false,
        },
        userName,
        userLastName,
        userDocumentType,
        userDocument,
        userPhone,
        userBirthday,
      };
    }
    case USER_FAILURE:
      return {
        ...state,
        //loading: false,
        //error: action.error,
        states: {
          loading: false,
          success: false,
          error: true,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
