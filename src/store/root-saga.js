import { all, call } from "redux-saga/effects"

import { catgoriesSaga } from "./categories/category.saga"

export function* rootSaga() {
    yield all([call(catgoriesSaga)])
};