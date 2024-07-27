import axios from "axios";
import { server } from "../../server";
import {
  createEventFail,
  createEventRequest,
  createEventSuccess,
} from "../reducers/event";

// create event
export const createEvent = (formData) => async (dispatch) => {
  try {
    dispatch(createEventRequest());

    const { data } = await axios.post(
      `${server}/event/create-event`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      },
    );

    dispatch(createEventSuccess(data.event));
  } catch (error) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    dispatch(createEventFail(errorMessage));
  }
};
