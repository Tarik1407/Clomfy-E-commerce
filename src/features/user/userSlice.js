import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialUserState = {
  user: { username: "Test test" },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (state, action) => {
      console.log("Login for user slice");
    },
    logoutUser: (state, action) => {
      state.user = null;
      localStorage.clear();
      toast.success("Logged out successs.");
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
