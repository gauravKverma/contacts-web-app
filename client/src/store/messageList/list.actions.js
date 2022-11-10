import axios from "axios";
import {
  GET_LIST_ERROR,
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
} from "./list.types";

export const getList = (number, page) => async (dispatch) => {
  dispatch({ type: GET_LIST_LOADING }); // dispatching loading type
  try {
    let res = await axios.post(
      `https://otpappserver.onrender.com/getList?page=${page}`,
      { number }
    );
    // sending post request to backend server and sending the number entered in input as well
    if (res.data === "error") {
      dispatch({ type: GET_LIST_ERROR }); // if res is error then dispatching error type
    } else {
      dispatch({ type: GET_LIST_SUCCESS, payload: res.data }); // if res is array of data then dispatching success type
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCompleteList = (page) => async (dispatch) => {
  dispatch({ type: GET_LIST_LOADING }); // dispatching loading type
  try {
    let res = await axios.get(
      `https://otpappserver.onrender.com/completeList?page=${page}`
    );
    // sending get request to backend server with page as query
    if (res.data === "error") {
      dispatch({ type: GET_LIST_ERROR }); // if res is error then dispatching error type
    } else {
      dispatch({ type: GET_LIST_SUCCESS, payload: res.data }); // if res is array of data then dispatching success type
    }
  } catch (err) {
    console.log(err);
  }
};
