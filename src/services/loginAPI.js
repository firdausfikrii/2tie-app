import axios from "axios";

const API_URL =
  "https://livenfdqezuoybokqhxm.supabase.co/rest/v1/user";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpdmVuZmRxZXp1b3lib2txaHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYwODMsImV4cCI6MjA5NzIxMjA4M30.-xQCOCM3L16yZftMBi4Yd6KPubGQ0zMbuGQjRhSi9Js";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const loginAPI = {
  async createUser(data) {
    const response = await axios.post(API_URL, data, {
      headers,
    });

    return response.data;
  },

  async login(username, password) {
    const response = await axios.get(
      `${API_URL}?username=eq.${username}&password=eq.${password}`,
      {
        headers,
      }
    );

    return response.data;
  },
};