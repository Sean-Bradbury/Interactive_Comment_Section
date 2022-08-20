import {
  LOAD_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
  REPLY_COMMENT,
  SHOW_MODAL,
  UPDATE_LIKES_COMMENT,
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
        comments: state.comments
          .map((comment) => {
            comment.replies = comment.replies.filter(
              (reply) => reply.id !== action.payload
            );
            return comment;
          })
          .filter((comment) => comment.id !== action.payload),
      };
    case UPDATE_LIKES_COMMENT:
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.id) {
            comment.score = action.payload;
            return comment;
          } else {
            comment.replies.map((reply) => {
              if (reply.id === action.id) {
                reply.score = action.payload;
                return reply;
              } else {
                return reply;
              }
            });
            return comment;
          }
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
        currentCommentID: action.id,
      };
    default:
      return state;
  }
};

export default Reducer;
