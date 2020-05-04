import React, { createContext, useReducer } from 'react';
import Reducer from './reducer';

const initialState = {
  filter: ''
};

const Store = ({ categories, children } ) => {
  initialState.categories = categories;
  const [ state, dispatcher ] = useReducer(Reducer, initialState);
  return (<Context.Provider value={[ state, dispatcher ]}> 
    { children }
  </Context.Provider>);
};

export const Context = createContext(initialState);
export default Store;
