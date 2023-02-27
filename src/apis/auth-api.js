import axios from '../config/axios';

export const register = (input) => axios.post('/auth/register', input);
export const login = (input) => axios.post('/auth/login', input);
export const getMe = () => axios.get('/auth/me');

export const startEmail = (input) =>
  axios.post(
    '/auth/startEmail',
    input
    //   , {
    //     validateStatus: function (status) {
    //       return status < 500; // Resolve only if the status code is less than 500
    //     },
    //   }
  );
