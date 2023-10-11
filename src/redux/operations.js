import { fetchContactsApi } from 'services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
try {
    const contacts = await fetchContactsApi()
        return contacts;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
        }
    }
)