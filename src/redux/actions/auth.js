import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const asyncLoginAction = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const body = new URLSearchParams(payload).toString();
      const { data } = await http().post("/auth/login", body);
      return data.results;
    } catch (err) {
      const results = err?.response?.data?.results;
      const message = err?.response?.data?.message;
      if (results) {
        return rejectWithValue(results);
      }
      return rejectWithValue(message);
    }
  }
);
