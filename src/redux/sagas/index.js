import { all } from "redux-saga/effects";
import { watcherFetchList } from "./list.saga";

export default function* rootSaga() {
  yield all([watcherFetchList]);
}
