import { LOAD_COMMENTS } from '../types';

const Reducer = (state, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
