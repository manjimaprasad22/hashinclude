import { combineReducers, configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import listReducer from './listing'

const persistConfig = {
  key: "root",
  storage,
  whiteList: [
    "divelist", 
    
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    divelist: listReducer,
   
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
