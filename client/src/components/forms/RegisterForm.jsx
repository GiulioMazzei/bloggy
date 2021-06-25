import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';



const RegisterForm = ({ onSubmit, form, values, onChanges, validations, message, checkBtn }) => {
    return (
        <Form onSubmit={onSubmit} ref={form} className='form'>

            {message && (
                <div className='message-container-register'>
                    <div role='alert'><p>{message}</p></div>
                </div>
            )}

            <div className='form-group'>
                <div className="label-box">
                    <label htmlFor='username'>Username</label>
                </div>
                <Input
                    type='text'
                    className='form-control'
                    name='username'
                    value={values[0]}
                    onChange={onChanges[0]}
                    validations={validations[0]}
                    placeholder='Enter Your Username'
                />
            </div>

            <div className='form-group'>
                <div className="label-box">
                    <label htmlFor='email'>Email</label>
                </div>
                <Input
                    type='text'
                    className='form-control'
                    name='email'
                    value={values[1]}
                    onChange={onChanges[1]}
                    validations={validations[1]}
                    placeholder='Enter Your Email'
                />
            </div>

            <div className='form-group'>
                <div className="label-box">
                    <label htmlFor='password'>Password</label>
                </div>
                <Input
                    type='password'
                    className='form-control'
                    name='password'
                    value={values[2]}
                    onChange={onChanges[2]}
                    validations={validations[2]}
                    placeholder='Enter Your Password'
                />
            </div>

            <div className='button-box-register'>
                <button>Sign Up</button>
            </div>

            <CheckButton style={{ display: 'none' }} ref={checkBtn} />

        </Form>
    )
}

export default RegisterForm
