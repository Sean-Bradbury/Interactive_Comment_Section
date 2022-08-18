import {
  LOAD_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
  DELETE_REPLY,
  REPLY_COMMENT,
  SHOW_MODAL,
} from '../types';

const Reducer = (state, action) => {
  switch (action.type) {
    case LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
        currentUser: action.payload.currentUser,
      };
    case EDIT_COMMENT:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    case DELETE_REPLY:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          comment.replies = comment.replies.filter(
            (reply) => reply.id !== action.payload
          );
          return comment;
        }),
      };
    case REPLY_COMMENT:
      return {
        ...state,
      };
    case SHOW_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
