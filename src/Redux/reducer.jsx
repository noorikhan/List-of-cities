import {
  GET_ONE_TODO,
  GET_TODOS,
  REMOVE_ONE_TODO,
  SORT_BY_COUNTRY,
  SORT_BY_POPULATION_ASC,
  SORT_BY_POPULATION_DESC,
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
    case SORT_BY_COUNTRY:
      return {
        ...store,
        todo: payload.sort((a, b) => {
          return a.country - b.country;
        }),
      };
    case SORT_BY_POPULATION_ASC:
      return {
        ...store,
        todo: payload.sort((a, b) => {
          return a.population - b.population;
        }),
      };
    case SORT_BY_POPULATION_DESC:
      return {
        ...store,
        todo: payload.sort((a, b) => {
          return b.population - a.population;
        }),
      };
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
