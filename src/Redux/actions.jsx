export const GET_TODOS = "GET_TODOS";
export const GET_ONE_TODO = "GET_ONE_TOD";
export const UPDATE_ONE_TODO = "PATCH_ONE_TODO";
export const REMOVE_ONE_TODO = "REMOVE_ONE_TODO";

export const getTodo = (payload) => ({
  type: GET_TODOS,
  payload,
});

export const getOneTodo = (payload) => ({
  type: GET_ONE_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: UPDATE_ONE_TODO,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_ONE_TODO,
  payload,
});
