import {DispatchInterface} from '../interface/dispatch';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: DispatchInterface[] = [];

//thunk api calls
const dispatchSlice = createSlice({
  name: 'dispatch slice',
  initialState,
  reducers: {
    create: {
      reducer: (state, {payload}: PayloadAction<DispatchInterface>) => {
        state.push(payload);
      },
      prepare: itemDispatch => ({
        payload: itemDispatch,
      }),
    },
  },
  extraReducers: {},
});

export const {create: createDispatchAction} = dispatchSlice.actions;

export default dispatchSlice;
