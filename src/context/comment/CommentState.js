import React, { useReducer } from 'react';
import axios from 'axios';
import CommentContext from './commentContext';
import CommentReducer from './commentReducer';

import { LOAD_COMMENTS } from '../types';

const CommentState = (props) => {
  const initialState = {
    data: [],
    activeUser: 'juliusomo',
  };

  const [state, dispatch] = useReducer(CommentReducer, initialState);

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

  return (
    <CommentContext.Provider
      value={{
        data: state.data,
        activeUser: state.activeUser,
        loadComments,
      }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
