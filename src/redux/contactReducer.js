import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {list: []},
    reducers: {
        addNewContact: {
        reducer(state, action) {
                state.list.push(action.payload)
        },
        prepare({ name, number }) {
            return {
                payload: {
                    id: nanoid(),
                    name,
                    number
                }}}
        },
        deleteContact(state, action) {
           state.list = state.list.filter(contact => 
        contact.id !== action.payload)
        }
    }
})

export const { addNewContact, deleteContact } = contactSlice.actions;
// export const contactReducer = contactSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
}

export const persistedContactReducer = persistReducer(persistConfig, contactSlice.reducer)