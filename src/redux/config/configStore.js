import { configureStore } from '@reduxjs/toolkit';
import todosSlice from 'redux/modules/todosSlice';
import alertMessageSlice from 'redux/modules/alertMessageSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
    alerts: alertMessageSlice.reducer,
  },
});

export default store;
