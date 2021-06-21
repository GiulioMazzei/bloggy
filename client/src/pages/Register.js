import { useState, useRef } from "react"

import AuthService from '../services/auth.service'

import RegisterForm from "../components/RegisterForm"

import Helper from '../helper/index'



const Register = (props) => {

    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');


    const handleRegister = (e) => {

        e.preventDefault();
    
        setMessage('');
    
        //validate the user credentials
        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            //if there aren't validation errors register the user
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
            
                    //redirect the user to the login page
                    props.history.push('/login');
                    window.location.reload();
                },
                (error) => {
                    const resMessage = error.response?.data?.message || error.message || error.toString();
                    setMessage(resMessage);
                    // setSuccessful(false);
                }
            );
        }
    };

    return (
        <div className='register-container'>
            
            <h1>REGISTER</h1>

            <RegisterForm 

                onSubmit={handleRegister}
                form={form}
                values={[username, email, password]}

                onChanges={[
                    (e) => setUsername(e.target.value),
                    (e) => setEmail(e.target.value),
                    (e) => setPassword(e.target.value),
                ]}

                validations={[
                    [Helper.required, Helper.validUsername],
                    [Helper.required, Helper.validEmail],
                    [Helper.required, Helper.validPassword],
                ]}

                message={message}
                checkBtn={checkBtn}

            />

        </div>
    )
}

export default Register
