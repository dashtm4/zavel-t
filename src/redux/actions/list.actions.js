const listActionTypes = {
  FETCH_LIST_ITEMS_REQUEST: "FETCH_LIST_ITEMS_REQUEST",
  FETCH_LIST_ITEMS_SUCCEED: "FETCH_LIST_ITEMS_SUCCEED",
  FETCH_LIST_ITEMS_FAIL: "FETCH_LIST_ITEMS_FAIL",
};

export const fetchList = () => ({
  type: listActionTypes.FETCH_LIST_ITEMS_REQUEST,
});

export default listActionTypes;
