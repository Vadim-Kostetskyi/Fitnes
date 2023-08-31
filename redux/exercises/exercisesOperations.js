import { auth, db } from "../../config";
import { exercisesSlice } from "./exercisesReduser";

const { setNumberOfApproach } = exercisesSlice.actions;

export const setNumberOfApproaches =
  ({ exercise, quantity }) =>
  async (dispatch, getState) => {
    try {
      // const { user } = await createUserWithEmailAndPassword(
      //   auth,
      //   userEmail,
      //   password
      // );

      dispatch(setNumberOfApproach({ exercise, quantity }));
    } catch (error) {
      throw error;
    }
  };
