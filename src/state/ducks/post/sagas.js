import { call, put, fork, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";
import * as POST from "./types";
import {
    fetchListFailure,
    fetchListSuccess,
    fetchDetailsFailure,
    fetchDetailsSuccess,
    writeCommentFailure,
    writeCommentSuccess,
} from "./actions";

function* fetchList(action) {
    try {
        const posts = yield call(axios, "/posts/");
        yield put(fetchListSuccess(posts.data));
    } catch (e) {
        yield put(fetchListFailure(e.response.data));
    }
}

function* fetchDetails(action) {
    try {
        const posts = yield call(axios, `/posts/${action.id}/?_embed=comments`);
        yield put(fetchDetailsSuccess(posts.data));
    } catch (e) {
        yield put(fetchDetailsFailure(e.response.data));
    }
}

function* writeComment(action) {
    try {
        const comment = yield call(axios.post, `/posts/${action.payload.postId}/comments`, { body: action.payload.body });
        yield put(writeCommentSuccess(comment.data));
    } catch (e) {
        yield put(writeCommentFailure(e.response.data));
    }
}

//////////////
// WATCHERS //
//////////////
function* watchFetchList() {
    yield takeLatest(POST.FETCH_LIST, fetchList);
    yield takeLatest(POST.FETCH_DETAILS, fetchDetails);
    yield takeLatest(POST.WRITE_COMMENT, writeComment);
}

export default [
    fork(watchFetchList)
    // fork(watchUpdateTask)
];
