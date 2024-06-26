import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Endpoints from "../../../constants/EndPoints";
import { POST } from "../../../services/api";
import { getUniqueDeviceId } from "../../../utils/commonFunctions";
import { toast } from "react-toastify";

export const adminLogin = createAsyncThunk(
  'auth/adminLogin',
  async ({ email, password }) => {
    const device_id = getUniqueDeviceId();
    const device_token = "chbdxjbkjsfdfd" + device_id;
    const device_type = "2";

    try {
      const response = await POST(
        `${Endpoints.VERSION}${Endpoints.AUTH}${Endpoints.LOGIN}`,
        { email, password, device_id, device_token, device_type }
      );
      if (response.data.status_code === 200 || response.data.code === 200) {
        localStorage.setItem("ACCESS_TOKEN_CHITRAKOOT", response.data.result.token);
        localStorage.setItem("NAME", response.data.result.name ?? response.data.result.username);
        toast.success(response.data.message);
        return response?.data?.result;
      } else {
        throw new Error(response.data.message);
        
      }
    } catch (error) {
      toast.error(error?.data?.message);
      throw new Error(error?.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  isLoggedIn: !!localStorage.getItem("ACCESS_TOKEN_CHITRAKOOT"),
  user: null,
  token: localStorage.getItem("ACCESS_TOKEN_CHITRAKOOT") || null,
  isLoading: false,
  error: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      localStorage.clear();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Login failed';
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;