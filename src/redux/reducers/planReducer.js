import { PLAN, PLAN_SUCCESS, PLAN_FAILURE, GET_SELECTED_PLAN } from '../types';

const initialState = {
  list: [],
  plan: '',
  price: '',
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
    case GET_SELECTED_PLAN: {
      const { plan, price } = action.payload;
      return {
        ...state,
        plan,
        price,
        states: {
          loading: false,
          success: true,
          error: false,
        },
      };
    }
    default:
      return state;
  }
};

export default planReducer;
