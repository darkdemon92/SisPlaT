import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import loginReducer from "./features/loginSlice";
import tasksReducer from "./features/taskSlice";

import { persistStore, persistReducer } from "reduxjs-toolkit-persist";
import storageSession from "reduxjs-toolkit-persist/lib/storage/session";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  //storage: storageSession,
  storage,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  theme: themeReducer,
  loginData: loginReducer,
  tasks: tasksReducer
});

const persistedReducers = persistReducer(persistConfig, reducers);


export const store = configureStore({
  reducer: persistedReducers,
  middleware: [thunk],
});

export const persistor = persistStore(store);
