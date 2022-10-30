import * as actionTypes from "./actionTypes";

export function changecategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}
