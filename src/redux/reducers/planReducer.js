import { PLAN, PLAN_SUCCESS, PLAN_FAILURE } from '../types';

const initialState = {
  list: [],
  states: {
    loading: false,
    success: false,
    error: false,
  },
};

const planReducer = (state = initialState, action) => {
  //debugger;
  switch (action.type) {
    /*case FETCH_POSTS:
            return action.payload;*/
    case PLAN:
      return {
        ...state, // hacemos una copia del estado porque no es mutable
        states: {
          loading: true,
          success: false,
          error: false,
        },
      };
    case PLAN_SUCCESS: {
      const { list } = action.payload;
      return {
        ...state,
        list,
        states: {
          loading: false,
          success: true,
          error: false,
        },
      };
    }
    case PLAN_FAILURE:
      return {
        ...state,
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

export default planReducer;
