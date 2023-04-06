import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Event {
  id: number;
  title: string;
}

export interface EventsState {
  setSelected: any;
  userText: string;
  events: Event[];
  messageData: any[];
  chatData: any[];
}

const initialState: EventsState = {
  setSelected: null,
  userText: "",
  events: [
    { id: 1, title: " for Title 1" },
    { id: 2, title: " for Title 2" },
    { id: 3, title: " for Title 3" },
    { id: 4, title: " for Title 4" },
    { id: 5, title: " for Title 5" },
    { id: 7, title: " for Title 6" },
    { id: 6, title: " for Title 7" },
    { id: 8, title: " for Title 8" },
    { id: 9, title: " for Title 9" },
    { id: 10, title: " for Title 10" },
    { id: 11, title: " for Title 11" },
    { id: 12, title: " for Title 12" },
  ],
  messageData: [],
  chatData: [],
};

export const eventsSlice = createSlice({
  name: "eventsSlice",
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<any>) => {
      state.setSelected = action.payload;
    },
    setDataHistory: (state, action: PayloadAction<any>) => {
      state.chatData = action.payload;
    },
    setUserText: (state, action: PayloadAction<string>) => {
      state.userText = action.payload;
    },
    sendMessage: (state, action: PayloadAction<any>) => {
      state.messageData = action.payload;
    },
  },
});

export const { getData, setDataHistory, setUserText, sendMessage } =
  eventsSlice.actions;
export default eventsSlice.reducer;
