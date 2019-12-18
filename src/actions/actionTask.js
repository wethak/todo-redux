import {
  ADD_TASK,
  EDIT_TASK,
  SHOW_TASK,
  DELETE_TASK,
  COMPLETE_TASK
} from "./actionsType";

export const addTask = payload => {
  return {
    type: ADD_TASK,
    payload
  };
};
export const editTask = (payload, index) => {
  return {
    type: EDIT_TASK,
    payload,
    index
  };
};
export const showTask = payload => {
  return {
    type: SHOW_TASK,
    payload
  };
};
export const deleteTask = payload => {
  return {
    type: DELETE_TASK,
    payload
  };
};
export const completeTask = payload => {
  return {
    type: COMPLETE_TASK,
    payload
  };
};
