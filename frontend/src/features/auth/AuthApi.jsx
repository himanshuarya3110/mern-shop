import { axiosi } from "../../config/axios";

export const signup = async (cred) => {
  try {
    const res = await axiosi.post("http://localhost:8000/auth/signup", cred);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const login = async (cred) => {
  try {
    const res = await axiosi.post("http://localhost:8000/auth/login", cred);
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const verifyOtp = async (cred) => {
  try {
    const res = await axiosi.post(
      "http://localhost:8000/auth/verify-otp",
      cred
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const resendOtp = async (cred) => {
  try {
    const res = await axiosi.post(
      "http://localhost:8000/auth/resend-otp",
      cred
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const forgotPassword = async (cred) => {
  try {
    const res = await axiosi.post(
      "http://localhost:8000/auth/forgot-password",
      cred
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const resetPassword = async (cred) => {
  try {
    const res = await axiosi.post(
      "http://localhost:8000/auth/reset-password",
      cred
    );
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const checkAuth = async (cred) => {
  try {
    const res = await axiosi.get("http://localhost:8000/auth/check-auth");
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const logout = async () => {
  try {
    const res = await axiosi.get("http://localhost:8000/auth/logout");
    return res.data;
  } catch (error) {
    throw error.response.data;
  }
};
