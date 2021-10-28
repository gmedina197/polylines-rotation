import {
  CREATE_SHAPE,
  GET_SHAPE,
  LIST_SHAPE,
  UPDATE_SHAPE,
  DELETE_SHAPE,
} from "./types";

const INITIAL_STATE: { id: number; name: string; somethingMore: any }[] = [];

const reducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: { id: number } }
) => {
  switch (action.type) {
    case CREATE_SHAPE:
      return [...state, action.payload];

    case GET_SHAPE:
      return state.find((s) => (s.id = action.payload.id));

    case LIST_SHAPE:
      return state;

    case UPDATE_SHAPE:
      return state.map((s) =>
        s.id === action.payload.id ? { ...s, ...action.payload } : s
      );

    case DELETE_SHAPE:
      return state.filter((s) => s.id !== action.payload.id);

    default:
      return state;
  }
};

export default reducer;
