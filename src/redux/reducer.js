import { ADD_LIST, EDIT_LIST, DELETE_LIST } from "./action";

const initList = [];
const reducer = (
  state = JSON.parse(localStorage.getItem("todoRedux")) ?? initList,
  action
) => {
  switch (action.type) {
    case ADD_LIST:
      state = [...state, action.payload];
      localStorage.setItem("todoRedux", JSON.stringify(state));
      return state;

    case EDIT_LIST: {
      let newList = state.filter((list) => list.id === action.payload.id);
      state[newList[0].id] = action.payload;
      localStorage.setItem("todoRedux", JSON.stringify(state));
      return state;
    }
    case DELETE_LIST:
      state = state.filter((list) => list.id !== action.payload.id);
      localStorage.setItem("todoRedux", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default reducer;
