import { SET_DIMENSIONS } from '../types';

const Reducer = (state, action) => {
  switch (action.type) {
    case SET_DIMENSIONS:
      return {
        ...state,
        dimensions: action.dimensions,
      };
    default:
      return state;
  }
};

export default Reducer;
