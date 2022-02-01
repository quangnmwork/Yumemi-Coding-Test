import prefectureReducer from "./prefectureSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  prefecture: prefectureReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
