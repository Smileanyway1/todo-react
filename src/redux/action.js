export const ADD_LIST = "ADD_LIST";
export const EDIT_LIST = "EDIT_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const addList = (list) => {
  return {
    type: ADD_LIST,
    payload: list,
  };
};
export const editList = (list) => ({
  type: EDIT_LIST,
  payload: list,
});
export const removeList = (id) => ({
  type: DELETE_LIST,
  payload: { id },
});
