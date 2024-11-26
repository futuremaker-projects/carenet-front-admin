import {combineReducers, configureStore} from '@reduxjs/toolkit'
import modalReducer from "./modalSlice.js";
import contentReducer from "./contentSlice.js";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const combinedReducer = {
    modal: modalReducer,
    content: contentReducer

    // header : headerSlice,
    // rightDrawer : rightDrawerSlice,
    // lead : leadsSlice
}

let reducers = combineReducers({
    modal: modalReducer,
    content: contentReducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cbt']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer
});

export default store;