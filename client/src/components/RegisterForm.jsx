import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';



const RegisterForm = ({ onSubmit, form, values, onChanges, validations, message, checkBtn }) => {
    return (
        <Form onSubmit={onSubmit} ref={form}>

            {message && (
                <div className='form-group'>
                    <div role='alert'>{message}</div>
                </div>
            )}

            <div>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <Input
                        type='text'
                        className='form-control'
                        name='username'
                        value={values[0]}
                        onChange={onChanges[0]}
                        validations={validations[0]}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <Input
                        type='text'
                        className='form-control'
                        name='email'
                        value={values[1]}
                        onChange={onChanges[1]}
                        validations={validations[1]}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <Input
                        type='password'
                        className='form-control'
                        name='password'
                        value={values[2]}
                        onChange={onChanges[2]}
                        validations={validations[2]}
                    />
                </div>

                <div className='form-group'>
                    <button>SIGN UP</button>
                </div>
            </div>

            <CheckButton style={{ display: 'none' }} ref={checkBtn} />

        </Form>
    )
}

export default RegisterForm
