import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: {},
};

export const exercisesSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    setNumberOfApproach: (state, { payload }) => (
      console.log(111),
      console.log("payload", payload.exercise),
      console.log("state", state),
      {
        exercises: {
          ...state.exercises,
          [payload.exercise]: payload.quantity,
        },
      }
    ),
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
