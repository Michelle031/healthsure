export const initialState = {
  plan: null,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAN":
      return {
        ...state,
        plan: action.plan,
      };

    default:
      return state;
  }
}

export default reducer;
