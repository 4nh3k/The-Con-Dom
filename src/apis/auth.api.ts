// src/apis/auth.api.ts

import http from "../utils/http";

const authApi = {
  login: async (credentials: { username: string; password: string }) => {
    const response = await http.post("/login", credentials);
    // Assuming the token is in response.data.token
    const { token } = response.data; // Adjust this according to your API response structure
    localStorage.setItem("accessToken", token); // Store the token in local storage
    return response;
  },

  register: async (data: { username: string; password: string }) => {
    const response = await http.post("/register", data);
    return response;
  },
};

export default authApi;
