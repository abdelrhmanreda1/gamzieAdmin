import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://gamzie.onehand.dev/admin",
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    const token = response.data.token;
    Cookies.set("authToken", token, { secure: true, sameSite: "Strict" });

    console.log("response", response.data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error(error.message);
  }
};

export const logout = () => {
  Cookies.remove("authToken", { secure: true, sameSite: "Strict" });
  window.location.href = "/login";
};
