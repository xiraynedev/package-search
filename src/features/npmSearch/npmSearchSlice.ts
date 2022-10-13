import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PackageState {
  loading: boolean;
  error: string;
  data: string[];
}

const initialState: PackageState = {
  loading: false,
  error: '',
  data: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchPackages: (state) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    },
    packagesSuccess: (state, action: PayloadAction<string[]>) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    },
    packagesError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const { searchPackages, packagesSuccess, packagesError } =
  searchSlice.actions;

export default searchSlice.reducer;
