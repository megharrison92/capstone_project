import {  Formik, useFormik } from 'formik';
import { UserContext } from './context/user.js'
import { useContext } from 'react';

function LoginForm() {

    const { setUser } = useContext(UserContext)

    const{ values, handleChange, handleSubmit }  = useFormik ({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (data) => {
            //console.log(data)
            fetch('/login', {
                method: 'POST', 
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data),
            }) 
            .then((r) => r.json())
            .then((user) => {
                console.log(user)
                setUser(user)
            })
            
        }
    })

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit= { handleSubmit }>
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
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}
    
    
export default LoginForm;