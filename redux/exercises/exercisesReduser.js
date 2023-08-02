import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // userId: null,
  // nickname: null,
  // isLogIn: null,
  // email: null,
  // photoURL: null,
};

export const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    // updateUserProfile: (state, { payload }) => ({
    //   ...state,
    //   userId: payload.userId,
    //   nickname: payload.nickname,
    //   email: payload.email,
    //   photoURL: payload.photoURL,
    // }),
    // authStateChanges: (state, { payload }) => ({
    //   ...state,
    //   isLogIn: payload.stateChange,
    // }),
    // authSignOut: (state) => ({
    //   ...initialState,
    // }),
  },
});
