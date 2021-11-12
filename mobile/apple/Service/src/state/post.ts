import {PostInterface} from '../interface/post';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: PostInterface[] = [];

const postSlice = createSlice({
  name: 'post slice',
  initialState,
  reducers: {
    create: {
      reducer: (state, {payload}: PayloadAction<PostInterface>) => {
        state.push(payload);
      },
      prepare: post => ({
        payload: post,
      }),
    },
  },
  extraReducers: {},
});

export const {create: createPostAction} = postSlice.actions;

export default postSlice;
