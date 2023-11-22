import { SUBMIT_FORM, SUBMIT_FORM_SUCCESS, SUBMIT_FORM_ERROR } from '../utils/types';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return {
        ...state,
        loading: true
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case SUBMIT_FORM_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default formReducer;