import React, { useReducer } from 'react';
import AppContext from './appContext';
import AppReducer from './appReducer';

import { SET_DIMENSIONS } from '../types';

const AppState = (props) => {
  const initialState = {
    dimensions: {
      width: null,
      height: null,
    },
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setDimensions = (dimensions) => {
    try {
      dispatch({
        type: SET_DIMENSIONS,
        dimensions,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContext.Provider
      value={{
        setDimensions,
        dimensions: state.dimensions,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
