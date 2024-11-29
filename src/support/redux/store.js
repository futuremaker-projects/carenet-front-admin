import {combineReducers, configureStore} from '@reduxjs/toolkit'
import modalReducer from "./modalSlice.js";
import contentReducer from "./contentSlice.js";
import cbtReducer from "./cbtSlice.js";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const combinedReducer = {
    modal: modalReducer,
    content: contentReducer,
    cbt: cbtReducer

    // header : headerSlice,
    // rightDrawer : rightDrawerSlice,
    // lead : leadsSlice
}

const reducers = combineReducers({
    modal: modalReducer,
    content: contentReducer,
    cbt: cbtReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cbt'],
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export const persistor = persistStore(store);
export default store;