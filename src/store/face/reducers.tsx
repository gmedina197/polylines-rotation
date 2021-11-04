import { Vertex } from "../../structures/vertex";
import {
  CREATE_FACE,
  GET_FACE,
  LIST_FACE,
  UPDATE_FACE,
  DELETE_FACE,
} from "./types";

const INITIAL_STATE: Vertex[] = [];

const reducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: Vertex }
) => {
  switch (action.type) {
    case CREATE_FACE:
      return [...state, action.payload];

    case GET_FACE:
      return state.find((s) => (s.id = action.payload.id));

    case LIST_FACE:
      return state;

    case UPDATE_FACE:
      return state.map((s) =>
        s.id === action.payload.id ? { ...s, ...action.payload } : s
      );

    case DELETE_FACE:
      return state.filter((s) => s.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
