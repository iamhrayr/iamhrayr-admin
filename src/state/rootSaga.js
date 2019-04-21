import { all } from "redux-saga/effects";
import { postSagas } from "./ducks/post";

export default function* sagas() {
    yield all([
        ...postSagas
        //   ...taskSagas
    ]);
}
