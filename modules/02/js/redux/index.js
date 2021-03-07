const createStore = (reducer, initialState) => {
  let state = initialState;
  let updater = () => {};
  const getState = () => state; //solo hace una accion

  const dispatch = (action) => {
    state = reducer(state, action);
    updater();
  };
  const subscribe = (listener) => {
    updater = listener;
  };
  return {
    getState,
    dispatch,
    subscribe,
  };
};

function combineReducers() {}

export {
  createStore,
  combineReducers, // si se creara la funcion se exportaria de esta manera
};
