import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './reducers/noteReducer';
import authReducer from './reducers/authReducer';

const store = configureStore({
  reducer: {
    note: noteReducer,
    auth: authReducer,
  } 
});

export default store;
