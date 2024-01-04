import { createSlice, createAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface LocationState {
  coordinates: { lng: number; lat: number };
}

// Initial state
const initialState: LocationState = {
  coordinates: { lat: 0, lng: 0 },
};

const hydrate = createAction<AppState>(HYDRATE);

// Actual Slice
export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // Action to set the authentication status
    setLocationState(state: LocationState, action) {
      state.coordinates = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapperextraReducers: (builder) => {
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.location,
      };
    });
  },
});

export const { setLocationState } = locationSlice.actions;

export const selectLocationState = (state: AppState) => state.location.LocationState;

export default locationSlice.reducer;
