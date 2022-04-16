import {
  GET_ONE_TODO,
  GET_TODOS,
  REMOVE_ONE_TODO,
  UPDATE_ONE_TODO,
} from "./actions";

const initialTodos = {
  todo: [],
};
export const getTodosReducer = (store = initialTodos, { type, payload }) => {
  switch (type) {
    case GET_TODOS:
      return { ...store, todo: payload };
    case REMOVE_ONE_TODO:
      return { ...store, todo: payload };
    default:
      return store;
  }
};

const initialOneTodo = {
  todo: {},
};
export const getOneTodoReducer = (
  store = initialOneTodo,
  { type, payload }
) => {
  switch (type) {
    case GET_ONE_TODO:
      return { store, todo: payload };
    case UPDATE_ONE_TODO:
      return { store, todo: payload };
    default:
      return store;
  }
};
