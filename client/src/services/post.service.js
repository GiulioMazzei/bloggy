/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/posts';


//get all the posts
const getAll = () => axios.get(API_URL);

//find the post from its title
const findByTitle = (title) => axios.get(`${API_URL}/t/?title=${title}`);

//find the post from its author
const findByAuthor = (author) => axios.get(`${API_URL}/a/?author=${author}`)

//find the post from its category
const findByCategory = (category) => axios.get(`${API_URL}/c/?category=${category}`)

//create the post
const create = (author, title, content, category) => axios.post(API_URL, { author, title, content, category});

//remove the post from its ID
const remove = (id) => axios.delete(`${API_URL}/${id}`);

//update the post from its ID
const update = (id, title, content) => axios.put(`${API_URL}/${id}`, { title, content });



export default { getAll, findByTitle, findByAuthor, findByCategory, create, remove, update }