import axios from "axios";

// Global axios setup
function InitAxios() {
  axios.defaults.baseURL = "https://cms-penkin.denican.id/api";
  
  axios.interceptors.response.use((res) => {
    return res.data;
  })
}

export default InitAxios;