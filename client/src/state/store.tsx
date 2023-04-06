import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { eventsSlice, EventsState } from "./feature/mySlice";

export const store = configureStore({
  reducer: eventsSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
