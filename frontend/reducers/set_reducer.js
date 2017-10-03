import { merge } from 'lodash';

const SetReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default SetReducer;
