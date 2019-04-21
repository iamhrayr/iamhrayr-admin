import { combineReducers } from "redux";
import keyBy from "lodash/keyBy";

import { createReducer } from "../../utils";
import * as POST from "./types";

const listInitialState = {
    fetched: false,
    fetching: false,
    idMap: {},
    allIds: []
};
const listReducer = createReducer(listInitialState, {
    [POST.FETCH_LIST]: (state, action) => {
        return { ...state, fetching: true };
    },
    [POST.FETCH_LIST_FAILURE]: (state, action) => {
        return { ...state, fetched: false, fetching: false };
    },
    [POST.FETCH_LIST_SUCCESS]: (state, action) => {
        return {
            fetched: true,
            fetching: false,
            idMap: keyBy(action.payload, post => post.id),
            allIds: action.payload.map(post => post.id)
        };
    }
});

const detailsInitialState = {
    fetched: false,
    fetching: false,
    data: {}
};
const detailsReducer = createReducer(detailsInitialState, {
    [POST.FETCH_DETAILS]: (state, action) => {
        return { ...state, fetching: true };
    },
    [POST.FETCH_DETAILS_FAILURE]: (state, action) => {
        return { ...state, fetched: false, fetching: false };
    },
    [POST.FETCH_DETAILS_SUCCESS]: (state, action) => {
        return {
            fetched: true,
            fetching: false,
            data: action.payload
        };
    }
});

export default combineReducers({
    list: listReducer,
    details: detailsReducer
});
