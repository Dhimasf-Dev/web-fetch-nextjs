import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  dataUser: []
}

const initialState: UserState = {
  dataUser: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDataUser(state, action: PayloadAction<[]>) {
      state.dataUser = action.payload;
    }
  },
});

export const { setDataUser } = userSlice.actions;
export default userSlice.reducer;
