/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

axios.defaults.baseURL = '/';

export const get = (url: any, config: any) => axios.get(url, config)
  .then((response) => response)
  .catch((error) => {
    const response = {
      isError: true,
      error: error.response,
    };
    return response;
  });

export const post = (url: any, data: any, config: any) => axios.post(url, data, config)
  .then((response) => response)
  .catch((error) => {
    const response = {
      isError: true,
      error: error.response,
    };
    return response;
  });

export const put = (url: any, data: any, config: any) => axios.put(url, data, config)
  .then((response) => response)
  .catch((error) => {
    const response = {
      isError: true,
      error: error.response,
    };
    return response;
  });

export const del = (url: any, config: any) => axios.delete(url, config)
  .then((response) => response)
  .catch((error) => {
    const response = {
      isError: true,
      error: error.response,
    };
    return response;
  });

export const patch = (url: any, data: any, config: any) => axios.patch(url, data, config)
  .then((response) => response)
  .catch((error) => {
    const response = {
      isError: true,
      error: error.response,
    };
    return response;
  });
