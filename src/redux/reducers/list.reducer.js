import listActionTypes from "../actions";

const initialState = {
  list: [],
  status: {
    success: false,
    errorMessage: "",
  },
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case listActionTypes.FETCH_LIST_ITEMS_SUCCEED:
      console.log("FETCH_LIST_ITEMS_SUCCEED");
      return {
        ...state,
        status: {
          success: true,
          errorMessage: "",
        },
      };
    case listActionTypes.FETCH_LIST_ITEMS_FAIL:
      console.log("FETCH_LIST_ITEMS_FAIL");
      return {
        ...state,
        status: {
          success: false,
          errorMessage: "error: FETCH_LIST_ITEMS_FAIL",
        },
      };

    default:
      return { ...state };
  }
};

export default listReducer;
