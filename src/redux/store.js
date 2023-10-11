import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filterReducer";
import { contactReducer } from "./contactReducer";
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        // contacts: persistedContactReducer,
        filter: filterReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
})

// export const persistor = persistStore(store)