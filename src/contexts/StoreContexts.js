import React, {
  createContext, useContext, useReducer, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import reducer from './store/reducer';
import { types } from './store/types';

const StoreContext = createContext();

const StoreProvider = (props) => {
  const { context } = props;
  const {
    user, loans
  } = context;
  const initialState = {
    user, loans
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = {
    updateStore: (payload) => dispatch({ type: types.UPDATE_STORE, payload }),
    updateCurrentUser: (payload) => dispatch({ type: types.UPDATE_CURRENT_USER, payload }),
    updateCurrentLoan: (payload) => dispatch({ type: types.UPDATE_CURRENT_LOAN, payload })
  };

  const value = [state, actions];

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.object,
  context: PropTypes.object,
};

const useStore = () => useContext(StoreContext);

export { StoreContext, useStore, StoreProvider };
