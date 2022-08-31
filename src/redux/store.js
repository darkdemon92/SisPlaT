import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import loginReducer from "./features/loginSlice";
import allTaskReducer from "./features/allTaskSlice";

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

const persistedReducerTheme = persistReducer(persistConfig, themeReducer);
const persistedReducerLogged = persistReducer(persistConfig, loginReducer);
const persistedReducerAllTask = persistReducer(persistConfig, allTaskReducer);


export const store = configureStore({
  reducer: {
    theme: persistedReducerTheme,
    userData: persistedReducerLogged,
    allTasks: persistedReducerAllTask,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
