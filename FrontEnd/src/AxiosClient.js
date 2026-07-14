import axios from "axios";
import { get } from "./Services/LocalStorageService";

const getBaseURL = () => {
  // Use explicit API URL if provided via environment variable
  if (process.env.REACT_APP_API_URL) {
    let url = process.env.REACT_APP_API_URL;
    // Ensure the URL contains a protocol (http:// or https://). If missing, prepend https://
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }
    console.log('Axios base URL from env:', url);
    return url;
  }
  // Check if we are running in the browser on a deployed production environment (e.g. Vercel)
  if (
    typeof window !== "undefined" &&
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1"
  ) {
    // Return the production Railway backend API URL (using https to avoid mixed-content block)
    const prodUrl = "https://docbook-backend-production-1c06.up.railway.app/api";
    console.log('Axios base URL (prod):', prodUrl);
    return prodUrl;
  }
  const localUrl = "http://127.0.0.1:8000/api";
  console.log('Axios base URL (local):', localUrl);
  return localUrl;
};

const axiosClient = axios.create({
  baseURL: getBaseURL(),
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Accept = "application/json";

  let token = null;
  const url = config.url || "";

  if (url.startsWith("/doctor")) {
    token = get("TOKEN_DOCTOR");
  } else if (url.startsWith("/admin")) {
    token = get("TOKEN_ADMIN");
  } else if (url.startsWith("/user")) {
    token = get("TOKEN_USER");
  } else {
    token = get("TOKEN_USER") || get("TOKEN_DOCTOR") || get("TOKEN_ADMIN");
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
