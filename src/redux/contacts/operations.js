import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global"

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const addContact = createAsyncThunk(
    "contacts/addContacts",
    async (newContact, thunkAPI) => {
      try {
        const responce = await axios.post("/contacts", newContact);
        return responce.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
      try {
        const responce = await axios.delete(`/contacts/${id}`);
        console.log(responce);
        return id;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );