import axios from "axios";
import store from '../src/store';

// Global axios setup
function InitAxios() {
  axios.defaults.baseURL = "https://cms-penkin.denican.id/api";

  axios.interceptors.request.use(function(config) {
      store.commit('setFetching');

      return config;
    }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  axios.interceptors.response.use((res) => {
    store.commit('setFetching');
    
    return res.data;
  })
}

export default InitAxios;