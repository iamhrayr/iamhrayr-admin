import reducer from "./reducers";
import * as postActions from "./actions";
import * as postSelectors from "./selectors";
import * as postTypes from "./types";
import postSagas from "./sagas";

export { postActions, postSelectors, postTypes, postSagas };
export default reducer;
