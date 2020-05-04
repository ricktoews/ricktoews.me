export const SET_FILTER = 'SET_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

const Reducer = (state, action) => {
  switch(action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };
      break;

    case CLEAR_FILTER:
      return {
        ...state,
        filter: ''
      };
      break;
  }
};

export default Reducer;
