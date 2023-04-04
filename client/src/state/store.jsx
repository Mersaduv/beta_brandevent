import { configureStore } from "@reduxjs/toolkit";
import { eventsSlice } from "./feature/mySlice";

export const store = configureStore({
  reducer: eventsSlice.reducer,
});
