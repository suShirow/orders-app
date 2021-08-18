import { combineReducers } from "redux";
import { ItemState, ItemType } from "../Types";
import { ItemAction } from "./actions/itemActions";
import _ from "lodash";

const initItemState: ItemState = { payload: [], page: 0, search: "" };

const items = (state = initItemState, action: ItemAction): ItemState => {
  switch (action.type) {
    case "REQ_START":
      return { ...state };
    case "REQ_SUCCESS":
      return { ...state };
    case "REQ_FAIL":
      return { ...state };
    case "SET_PAYLOAD":
      return {
        ...state,
        payload: action.payload,
      };
    case "SET_DEFAULTS":
      return {
        ...initItemState
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items,
});

export default rootReducer;
