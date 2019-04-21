import * as POST from "./types";

export const fetchList = () => ({
    type: POST.FETCH_LIST
});

export const fetchListSuccess = payload => ({
    type: POST.FETCH_LIST_SUCCESS,
    payload
});

export const fetchListFailure = error => ({
    type: POST.FETCH_LIST_SUCCESS,
    payload: error,
    error: true
});

export const fetchDetails = id => ({
    type: POST.FETCH_DETAILS,
    id
});

export const fetchDetailsSuccess = payload => ({
    type: POST.FETCH_DETAILS_SUCCESS,
    payload
});

export const fetchDetailsFailure = error => ({
    type: POST.FETCH_DETAILS_SUCCESS,
    payload: error,
    error: true
});

export const writeComment = ({ postId, body }) => ({
    type: POST.WRITE_COMMENT,
    payload: { postId, body },
});

export const writeCommentSuccess = comment => ({
    type: POST.WRITE_COMMENT_SUCCESS,
    payload: comment,
});

export const writeCommentFailure = error => ({
    type: POST.WRITE_COMMENT_FAILURE,
    payload: error,
    error: true,
});