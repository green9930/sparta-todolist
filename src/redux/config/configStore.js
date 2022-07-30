const { combineReducers, createStore } = require('redux');
const { default: todosReducer } = require('redux/modules/todos');

const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = createStore(rootReducer);

export default store;
