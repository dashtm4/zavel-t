import { call, put, takeLatest } from "redux-saga/effects";

import { fetchListApi } from "../../apis/list.api";
import listActionTypes from "../actions";

function* fetchList(action) {
  try {
    const payload = action.payload;

    const response = yield call(fetchListApi, { payload });
    const result = response.data;
    console.log("fetch List: ", result);

    yield put({
      type: listActionTypes.FETCH_LIST_ITEMS_SUCCEED,
      payload,
    });
  } catch (error) {
    yield put({
      type: listActionTypes.FETCH_LIST_ITEMS_FAIL,
      payload: "error: FETCH_LIST_ITEMS_FAIL",
    });
  }
}

export function* watcherFetchList() {
  yield takeLatest(listActionTypes.FETCH_LIST_ITEMS.REQUEST, fetchList);
}
