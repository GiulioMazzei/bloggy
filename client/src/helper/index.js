/* eslint-disable import/no-anonymous-default-export */
import { isEmail } from 'validator';



const required = (value) => {
    if (!value) {
        return <div role='alert'>This field is required!</div>
    }
};

const validUsername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return <div role='alert'>The username must be between 3 and 20 characters.</div>
    }
}

const validEmail = (value) => {
    if (!isEmail(value)) {
        return <div role='alert'>This is not a valid email.</div>
    }
};

const validPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return <div role='alert'>The password must be between 6 and 40 characters.</div>
    }
};


export default { required, validUsername, validEmail, validPassword }