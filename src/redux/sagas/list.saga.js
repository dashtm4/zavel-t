import { call, put, takeLatest } from "redux-saga/effects";

import { fetchListApi } from "../../apis/list.api";
import listActionTypes from "../actions";

function* fetchList() {
  try {
    const response = yield call(fetchListApi);
    const result = response.data;

    yield put({
      type: listActionTypes.FETCH_LIST_ITEMS_SUCCEED,
      payload: { result },
    });
  } catch (error) {
    yield put({
      type: listActionTypes.FETCH_LIST_ITEMS_FAIL,
      payload: "error: FETCH_LIST_ITEMS_FAIL",
    });
  }
}

export function* watcherFetchList() {
  yield takeLatest(listActionTypes.FETCH_LIST_ITEMS_REQUEST, fetchList);
}
