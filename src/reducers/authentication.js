import { HANDLE_LOGIN } from "../actions/constants";

const initialState = {
  isLogedIn: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN: {
      return {
        ...state,
        isLogedIn: !state.isLogedIn
      };
    }
    default:
      return state;
  }
};
