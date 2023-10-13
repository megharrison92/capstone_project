import { useState, useContext, useEffect  } from 'react';
import { UserContext } from './context/user';
import {  Formik, useFormik } from 'formik';
import * as yup from 'yup';

function ProfileCardEdit(){
    const { user, setUser } = useContext(UserContext);
    console.log(user)

    const RegisterFormSchema = yup.object().shape({
        first_name: yup.string().required('Please enter a firstname'),
        last_name: yup.string().required('Please enter a lastname'),
        username: yup.string().required('Please enter a username'),
        user_password: yup.string().required('Please enter a password'),
    })
    
    const{ values, handleChange, handleSubmit }  = useFormik ({
        initialValues: {
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            user_password: user.user_password
        },
        validationSchema: RegisterFormSchema, 
        onSubmit: (data) => {
            console.log(data)
            fetch(`/users/${user.id}`, {
                method: 'PATCH', 
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data),
            })
            .then((r) => {
                if (!r.ok) {
                    throw new Error('Network response was not ok');
                }
                return r.json();
            })
            .then((user) => {
                setUser(user);
            });
        },
    });

    // const data = {
    //     firstName: user.first_name,
    //     lastName: user.last_name,
    //     username: user.username,
    //     password: user.password,
    // }

    // useEffect( () => {
    //     setFormData( user );
    // }, [ user ]);

    
    const handleSaveClick = () => {
        // fetch(`/users/${user.id}`,{
        //     method: 'PATCH',
        //     headers: {"Content-Type": "application/json",},
        //     body: JSON.stringify(data),
        // }) 
        // .then((r) => r.json())
        // .then((user) => {
        //     console.log(user)
        //     setUser(user)
        // })
        // setEditingMode(false);
        // setUserInfoFront(userInfoBack)
    };
    
    const handleCancelClick = () => {
        // setEditingMode(false);
        // setUserInfoBack(userInfoFront);
      };

    const handleDeleteClick = () => {
        fetch(`/users/${user.id}`, {
            method: 'DELETE',
        })
        .then((r) => {
            if(!r.ok) {
                throw new Error('Something went wrong')
            }
            return r.json();
            })
            .then((data) => {})
            .catch((e) => {console.log(e);
        });
    };
    
    // const handleChange = (e) => {
        // const { name, value } = e.target;
        // setFormData({
        //   ...formData,
        //   [name]: value,
        // });
    //   };

    return(
        <div >
            <h2>Edit Information</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        First name:
                         <input
                            type="text"
                            placeholder="First Name"
                            name="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                        />
                    </label>
                     <br />
                    <label>
                        Last name:
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Username:
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            placeholder="Password"
                            name="user_password"
                            value={values.user_password}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <button type="submit" >
                        Save
                    </button>
                    <br />
                    <button type="button" onClick={handleDeleteClick}>
                        Delete Account
                    </button>
                    <br />
                </form>
        </div>
    );
}

export default ProfileCardEdit;