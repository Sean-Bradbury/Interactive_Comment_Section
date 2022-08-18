import React, { useReducer } from 'react';
import axios from 'axios';
import CommentContext from './commentContext';
import CommentReducer from './commentReducer';

import {
  LOAD_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
  REPLY_COMMENT,
  DELETE_REPLY,
  SHOW_MODAL,
} from '../types';

const CommentState = (props) => {
  const initialState = {
    comments: null,
    currentUser: null,
    activeUser: 'juliusomo',
    modal: false,
  };

  const [state, dispatch] = useReducer(CommentReducer, initialState);

  //Load all comments
  const loadComments = async () => {
    try {
      const res = await axios
        .get('data.json')
        .then((res) => res.data);

      console.log(res);

      dispatch({
        type: LOAD_COMMENTS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Delete a comment
  const deleteComment = (id) => {
    try {
      dispatch({
        type: DELETE_COMMENT,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Delete a comment
  const deleteReply = (id) => {
    try {
      dispatch({
        type: DELETE_REPLY,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Show modal
  const showModal = (action) => {
    try {
      dispatch({
        type: SHOW_MODAL,
        payload: action,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        comments: state.comments,
        currentUser: state.currentUser,
        activeUser: state.activeUser,
        modal: state.modal,
        deleteComment,
        deleteReply,
        loadComments,
        showModal,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
