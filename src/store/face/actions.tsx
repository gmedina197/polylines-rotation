import { Vertex } from "../../structures/vertex";
import {
  CREATE_FACE,
  GET_FACE,
  LIST_FACE,
  UPDATE_FACE,
  DELETE_FACE,
} from "./types";

export const createFace = (point: Vertex) => {
  return {
    type: CREATE_FACE,
    payload: point,
  };
};

export const getFace = () => {
  return {
    type: GET_FACE,
  };
};

export const listFace = () => {
  return {
    type: LIST_FACE,
  };
};

export const updateFace = () => {
  return {
    type: UPDATE_FACE,
  };
};

export const deleteFace = () => {
  return {
    type: DELETE_FACE,
  };
};
