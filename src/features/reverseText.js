import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getText = createAsyncThunk(
  "/iecho?text=",
  async (dispatch, getState) => {
    return await fetch(`http://localhost:3001/iecho?text=${dispatch}`).then(
      (res) => res.json()
    );
  }
);

const sliceText = createSlice({
  name: "text",
  initialState: {
    text: [],
    status: null,
  },
  extraReducers: {
    [getText.pending]: (state, action) => {
      state.status = "loading";
    },
    [getText.fulfilled]: (state, action) => {
      state.status = "success";
      state.text = [...state.text, action.payload];
    },
    [getText.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default sliceText.reducer;
