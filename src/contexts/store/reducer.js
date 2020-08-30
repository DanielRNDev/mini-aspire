import { types } from './types';

export const storeReducer = (state, action) => {
  switch (action.type) {
    case types.UPDATE_STORE:
      return {
        ...state,
        ...action.payload,
      };

    case types.UPDATE_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };

    case types.UPDATE_CURRENT_LOAN:
      return {
        ...state,
        loans: action.payload,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default storeReducer;
