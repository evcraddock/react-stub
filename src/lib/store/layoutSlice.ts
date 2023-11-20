import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface LayoutState {
  title: string;
}

const initialState: LayoutState = {
  title: 'React Stub',
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setTitle: (state: LayoutState, action: PayloadAction<string>) => ({
      ...state,
      title: action.payload,
    }),
  },
});

export const { setTitle } = layoutSlice.actions;
export const selectTitle = (state: RootState) => state.layout.title;

export default layoutSlice.reducer;
