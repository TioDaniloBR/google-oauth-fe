// src/utils/auth.ts
import { jwtDecode } from "jwt-decode";

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const isTokenValid = (): boolean => {
  const token = getToken();

  if (!token) {
    return false;
  }

  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp < currentTime) {
      return false;
    }

    return true;
  } catch (e) {
    return false;
  }
};

export const clearToken = () => {
  localStorage.removeItem("token");
};
