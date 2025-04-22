import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      const responce = await axios.post("/users/signup", credential);
      setAuthHeader(`Bearer ${responce.data.token}`);

      return responce.data;
    } catch (error) {
        
        return thunkAPI.rejectWithValue(error.response.data);  
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credential, thunkAPI) => {
    try {
      const responce = await axios.post("/users/login", credential);

      setAuthHeader(`Bearer ${responce.data.token}`);

      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  setAuthHeader("");
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);

      const responce = await axios.get("/users/current");
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);