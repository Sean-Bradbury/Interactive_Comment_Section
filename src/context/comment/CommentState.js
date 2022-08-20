import React, { useReducer } from 'react';
import axios from 'axios';
import CommentContext from './commentContext';
import CommentReducer from './commentReducer';

import {
  LOAD_COMMENTS,
  EDIT_COMMENT,
  DELETE_COMMENT,
  REPLY_COMMENT,
  SHOW_MODAL,
  UPDATE_LIKES_COMMENT,
} from '../types';

const CommentState = (props) => {
  const initialState = {
    comments: null,
    currentUser: null,
    modal: false,
    currentCommentID: null,
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

  //Update likes
  const updateLikesComment = (id, likes) => {
    try {
      dispatch({
        type: UPDATE_LIKES_COMMENT,
        id,
        payload: likes,
      });
    } catch (err) {
      console.log(err);
    }
  };

  //Show modal
  const showModal = (activeState, id) => {
    try {
      dispatch({
        type: SHOW_MODAL,
        payload: activeState,
        id,
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
        currentCommentID: state.currentCommentID,
        deleteComment,
        loadComments,
        showModal,
        updateLikesComment,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
