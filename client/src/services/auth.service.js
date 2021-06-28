/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'


const API_URL = 'http://localhost:3001/api/auth';


//register service
const register = (username, email, password) => {
    return axios.post(`${API_URL}/signup`, { username, email, password });
}



//login service
const login = (username, email, password) => {
    return axios
            .post(`${API_URL}/signin`, { username, email, password })
            .then((res) => {

                if (res.data.accessToken) {
                    //set the user object (with JWT access-token) in the Local Storage
                    localStorage.setItem('logged-in-user', JSON.stringify(res.data));
                }
        
                return res.data;
            });
};



//get-all-profiles service
const getAllProfiles = () => axios.get(`${API_URL}/all`)



//get-current-user service
const getCurrentUser = () => {
    //retrive the user object from the Local Storage
    return JSON.parse(localStorage.getItem('logged-in-user'));
};



//logout service
const logout = () => {
    //remove the user object from the Local Storage
    localStorage.removeItem('logged-in-user');
};    





export default { register, login, getAllProfiles, getCurrentUser, logout};
  