import {AnnouncementInterface} from '../interface/announcement';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: AnnouncementInterface[] = [];

const announcementsSlice = createSlice({
  name: 'announcement slice',
  initialState,
  reducers: {
    create: {
      reducer: (state, {payload}: PayloadAction<AnnouncementInterface>) => {
        state.push(payload);
      },
      prepare: announcement => ({
        payload: announcement,
      }),
    },
  },
});

export const {create: createAnnounceAction} = announcementsSlice.actions;

export default announcementsSlice;
