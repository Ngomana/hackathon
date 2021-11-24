import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dispatchSlice from './dispatch';
import postSlice from './post';
import announcementsSlice from './announcement';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
    dispatches: dispatchSlice.reducer,
    announcements: announcementsSlice.reducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
