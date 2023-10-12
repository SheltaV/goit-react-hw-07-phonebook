import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

const pending = state => {state.isLoading = true};
const rejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
    list: [],
    isLoading: false,
    error: null
  },
    extraReducers: {
    [fetchContacts.pending]: pending,
    [fetchContacts.fulfilled](state, action) {
        state.list = action.payload
        state.error = null
        state.isLoading = false
    },
    [fetchContacts.rejected]: rejected,
    [addContact.pending]: pending,
    [addContact.fulfilled](state, action) {
        state.list.push(action.payload)
        console.log(action.payload)
        // state.list.phone = action.payload.number
        state.error = null
        state.isLoading = false
    },
    [addContact.rejected]: rejected,
    [deleteContact.pending]: pending,
    [deleteContact.fulfilled](state, action) {
        const idx = state.list.findIndex(contact => contact.id === action.payload.id)
        state.list.splice(idx, 1)
        state.error = null
        state.isLoading = false
    },
    [deleteContact.rejected]: rejected
    }
})

export const contactReducer = contactSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// }

// export const persistedContactReducer = persistReducer(persistConfig, contactSlice.reducer)