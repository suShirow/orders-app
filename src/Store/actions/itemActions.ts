import { ItemType } from "../../Types";
import store from "../../Store";
import axios from 'axios';

const apiString = `https://api.sit.stixcloudtest.com/assignment/api/products`;

export type ItemAction =
  | { type: "REQ_START" }
  | { type: "REQ_SUCCESS" }
  | { type: "REQ_FAIL" }
  | { type: "SET_PAYLOAD"; payload: ItemType[];}
  | { type: "SET_DEFAULTS" };

export type ErrorAction = { type: "REQ_FAIL"; error: string };

const lazyTypeGuard = (artifact:any) => {
  console.log(artifact);
  if (Array.isArray(artifact)) {
    return true;
  }
  return false;
};

const reqFail = (error: string): ErrorAction => {
  return { type: "REQ_FAIL", error };
};

export const setPayload = (
  payload: ItemType[],
): ItemAction => {
  return { type: "SET_PAYLOAD", payload};
};

const clearItems = (): ItemAction => {
  return { type: "SET_DEFAULTS" };
};

export const getDefaults = () => async (dispatch:any) => {
  dispatch(clearItems());
};

export const prevPage = () => async (dispatch:any) => {
  const page =
    store.getState().items.page >= 1 ? store.getState().items.page - 1 : 0;
  const search =
    store.getState().items.search && store.getState().items.search.length > 0
      ? store.getState().items.search
      : "";


};

export const nextPage = () => async (dispatch:any) => {
  const page =
    store.getState().items.page >= 0 ? store.getState().items.page + 1 : 0;
  const search =
    store.getState().items.search && store.getState().items.search.length > 0
      ? store.getState().items.search
      : "";

};
