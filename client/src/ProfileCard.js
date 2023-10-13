import { useState, useContext } from 'react'
import { UserContext } from './context/user';

function ProfileCard() {
    const { user } = useContext(UserContext)
    
    //console.log(user)
    
    return (
        <div className='profile-card'>
            <div className='profile-card-inner'>
                <div className='profile-card-front'>
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Username: {user.username}</p>
                </div>
            </div>
        </div>
    );
}
    
    
export default ProfileCard;