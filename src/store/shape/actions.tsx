import { CREATE_SHAPE, GET_SHAPE, LIST_SHAPE, UPDATE_SHAPE, DELETE_SHAPE } from "./types";

export const createShape = () => {
  return {
    type: CREATE_SHAPE,
  };
};

export const getShape = () => {
  return {
    type: GET_SHAPE,
  };
};

export const listShape = () => {
  return {
    type: LIST_SHAPE,
  };
};

export const updateShape = () => {
  return {
    type: UPDATE_SHAPE,
  };
};

export const deleteShape = () => {
  return {
    type: DELETE_SHAPE,
  };
};
