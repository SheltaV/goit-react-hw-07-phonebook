import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";
// import * as contactActions from './actions'
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
    list: [],
    isLoading: false,
    error: null
  },
    reducers: {
        addNewContact: {
        reducer(state, action) {
                state.list.push(action.payload)
        },
        prepare({ name, number }) {
            return {
                payload: {
                    name,
                    number
                }}}
        },
        deleteContact(state, action) {
          state.list = state.list.filter(contact => 
          contact.id !== action.payload)
        }
  },
  extraReducers: {
    [fetchContacts.pending](state) {
        state.isLoading = true
    },
    [fetchContacts.fulfilled](state, action) {
        state.list.push(...action.payload)
        state.error = null
        state.isLoading = false
    },
    [fetchContacts.rejected](state, action) {
        state.isLoading = false
        state.error = action.payload
    }
    }
})

export const { addNewContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// }

// export const persistedContactReducer = persistReducer(persistConfig, contactSlice.reducer)