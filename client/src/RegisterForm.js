import { useState } from 'react';
import {  Formik, useFormik } from 'formik';
import * as yup from 'yup';

function RegisterForm() {
    
    const RegisterFormSchema = yup.object().shape({
        firstname: yup.string().required('Please enter a firstname'),
        lastname: yup.string().required('Please enter a lastname'),
        username: yup.string().required('Please enter a username'),
        password: yup.string().required('Please enter a password'),
    })
    
    const{ values, handleChange, handleSubmit }  = useFormik ({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        },
        validationSchema: RegisterFormSchema, 
        onSubmit: (data) => {
            fetch('/users', {
                method: 'POST', 
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data),
            })
            
        }
    })
    
    return (
        <div className='login-container'>
            Register:
            <form className='login-form' onSubmit={handleSubmit}>
                <label>
                    First name:
                    <input 
                        value ={ values.firstname }
                        onChange = { handleChange }
                        id = 'firstname'
                        type = 'text'
                        placeholder = 'First name'
                    />
                </label>
                <br />
                <label>
                    Last name:
                    <input 
                        value ={ values.lastname }
                        onChange = { handleChange }
                        id = 'lastname'
                        type = 'text'
                        placeholder = 'Last name'
                     />
                </label>
                <br />
                <label>
                    Username:
                    <input 
                        value ={ values.username }
                        onChange = { handleChange }
                        id = 'username'
                        type = 'text'
                        placeholder = 'Username'
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input 
                        value ={ values.password }
                        onChange = { handleChange }
                        id = 'password'
                        type = 'password'
                        placeholder = 'password'
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
    
    
export default RegisterForm;