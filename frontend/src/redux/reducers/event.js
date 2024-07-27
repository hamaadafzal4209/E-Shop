import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: false,
  event: null,
  events: [],
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    createEventRequest: (state) => {
      state.isLoading = true;
    },
    createEventSuccess: (state, action) => {
      state.isLoading = false;
      state.success = true;
      state.event = action.payload;
    },
    createEventFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },

    // Get all events for shop
    getAllEventsShopRequest: (state) => {
      state.isLoading = true;
    },
    getAllEventsShopSuccess: (state, action) => {
      state.isLoading = false;
      state.events = action.payload;
    },
    getAllEventsShopFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // delete event of a shop
    deleteEventRequest: (state) => {
      state.isLoading = true;
    },
    deleteEventSuccess: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    deleteEventFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    clearErrors: (state) => {
      state.error = null;
    },
    resetEventState: (state) => {
      state.success = false;
      state.error = null;
    },
  },
});

export const {
  createEventFail,
  createEventRequest,
  createEventSuccess,
  getAllEventsShopFailed,
  getAllEventsShopRequest,
  getAllEventsShopSuccess,
  deleteEventFailed,
  deleteEventRequest,
  deleteEventSuccess,
  clearErrors,
  resetEventState,
} = eventSlice.actions;

export default eventSlice.reducer;
