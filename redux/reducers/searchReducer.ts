import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: ''
};

const searchPokeSlice = createSlice({
  name: 'searchUser',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchPokeSlice.actions;
export default searchPokeSlice.reducer;
