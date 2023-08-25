import { PLAN, PLAN_SUCCESS, PLAN_FAILURE, GET_SELECTED_PLAN } from '../types';

import planService from '../../services/planService';

export const getPlans = () => async (dispatch) => {
  dispatch({ type: PLAN });
  try {
    const response = await planService.getPlan();
    //debugger;
    //console.log(response);
    dispatch({
      type: PLAN_SUCCESS,
      payload: {
        list: response.data.list,
      },
    });
  } catch (error) {
    dispatch({ type: PLAN_FAILURE, error: error.message });
  }
};

export const getSelectedPlan = (plan, price) => {
  //debugger;
  return {
    type: GET_SELECTED_PLAN,
    payload: {
      plan,
      price,
    },
  };
};
