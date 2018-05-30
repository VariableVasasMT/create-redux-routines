export default function flatCombineReducers(
  reducers,
  { resetActionType, initialState = {} }
) {
  return (prevState, action) => {
    if (action.type == resetActionType) {
      return initialState;
    }
    return reducers.reduce((state, reducer) => {
      const newState = {
        ...prevState,
        ...reducer(Object.keys(state).length ? state : prevState, action)
      };

      return newState;
    }, {});
  };
}