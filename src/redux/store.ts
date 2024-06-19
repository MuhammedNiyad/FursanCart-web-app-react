import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import cartSlice from "./slices/cartSlice";
import currencySlice from "./slices/currencySlice";

const persistConfig = {
  key: 'root',
  storage,
}



const rootReducer = combineReducers({
  // cart: cartSlice,
  currency: currencySlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  // reducer: {
  //   currencySts:currencySlice
  // }
  
});

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
