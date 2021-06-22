import { useState, useRef } from 'react'

import { Link } from 'react-router-dom'

import AuthService from '../services/auth.service'

import LoginForm from '../components/forms/LoginForm'

import Helper from '../helper/index'





const Login = (props) => {

    const form = useRef();
    const checkBtn = useRef();
  
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');


    const handleLogin = (e) => {

        e.preventDefault();
    
        setMessage('');
        setLoading(true);
    
        //validate the user credentials
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
            //if there aren't validation errors log in the user
            AuthService.login(username, email, password).then(
                () => {
                    //redirect the user to the home page
                    props.history.push(`/home`);
                    window.location.reload();
                },
                (error) => {
                    const resMessage = error.response?.data?.message || error.message || error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
          setLoading(false);
        }

    };


    return (
        <div>
            
            <h1>LOGIN</h1>

            <LoginForm

                onSubmit={handleLogin}
                form={form}
                values={[username, email, password]}
                
                onChanges={[
                    (e) => setUsername(e.target.value),
                    (e) => setEmail(e.target.value),
                    (e) => setPassword(e.target.value),
                ]}

                validations={[
                    [Helper.required],
                    [Helper.required],
                    [Helper.required],
                ]}

                loading={loading}
                message={message}
                checkBtn={checkBtn}

            />

            <div>
                <p>Don't Have an Account ? <Link to='/register'>Sign Up</Link></p>
            </div>

        </div>
    )
}

export default Login
