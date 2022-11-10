import {
  GET_LIST_ERROR,
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
} from "./list.types";

const initialState = {
  loading: false,
  data: [],
  length: "",
  error: false,
};

export const listReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LIST_LOADING: {
      return {
        ...state,
        loading: true,
        data: [],
        length: "",
        error: false,
      };
    }
    case GET_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload.list,
        length: payload.length,
        error: false,
      };
    }
    case GET_LIST_ERROR: {
      return {
        ...state,
        loading: false,
        data: [],
        length: "",
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
