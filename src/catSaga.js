import { call,put,takeEvery } from "redux-saga/effects";
import { getsCatsSuccess } from "./catState";

function* workGetCatsFetch() {
    const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
    const formattedCats = yield cats.json();
    const listOfCats = formattedCats.slice(0,10);
    yield put(getsCatsSuccess(listOfCats));
}
function* catSaga() {
    yield takeEvery('cats/getCatsFetch', workGetCatsFetch)
}

export default catSaga;  //watcherFunciton