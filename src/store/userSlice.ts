import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type ProviderState = {
    isProvider: boolean,
  }

  const initialState: ProviderState = {
    isProvider: false,
  }
  

const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        updateIsProvider(state, action: PayloadAction<boolean>) {
            state.isProvider = action.payload

        },
    },
});

export const {updateIsProvider} = userSlice.actions;

export default userSlice.reducer;