import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function RegisterForm() {
    
    const RegisterFormSchema = yup.object().shape({
        firstname: yup.string().required('Please enter a firstname'),
        lastname: yup.string().required('Please enter a lastname'),
        username: yup.string().required('Please enter a username'),
        password: yup.string().required('Please enter a password'),
    })
    
    const{ values, handleBlur, handleChange, handleSubmit}  = useFormik ({
        initialValues: {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
        },
        validationSchema: RegisterFormSchema
    })
    
    return (
        <div>
            <h2>Register</h2>
            <form>
                <input 
                    type="text"
                    placeholder="First Name"
                />
                <input 
                    type="text"
                    placeholder="Last Name"
                />
                <input 
                    type='text'
                    placeholder='Username'
                />
                <input 
                    type='text'
                    placeholder='Password'
                />
                <button type='button'>Register</button>
            </form>
        </div>
    )
}
    
    
export default RegisterForm;