import { useState } from 'react'

function ProfileCard({ user }) {

    const [ editingMode, setEditingMode ] = useState(false);
    const [ userInfoFront, setUserInfoFront ] = useState(user);
    const [ userInfoBack, setUserInfoBack ] = useState(user);

    const handleEditClick = () => {
        setEditingMode(true);
    }

    // const handleCancel = () => {
    //     setEditingMode(false);
    //     setUserInfoBack(user);
    // };

    const handleCancelClick = () => {
        setEditingMode(false);
        setUserInfoBack(userInfoFront);
      };
    
      const handleSaveClick = () => {
        // Send a request to update the user's information in the backend
        // You may need to send a PUT request to an endpoint like '/user/update'
        // with the 'userInfo' data
        setEditingMode(false);
        setUserInfoFront(userInfoBack)
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfoBack({
          ...userInfoBack,
          [name]: value,
        });
      };

    return (
        <div className={`profile-card ${ editingMode ? 'flipped' : ''}`}>
            <div className='profile-card-front'>
                <p>First Name: {userInfoFront.firstName}</p>
                <p>Last Name: {userInfoFront.lastName}</p>
                <p>Username: {userInfoFront.username}</p>
                <p>Password: ********</p>
                <button type="button" onClick={handleEditClick}>
                    Edit Information
                </button>
            </div>
            <div className='profile-card-back'>
                <h2>Edit Information</h2>
                <form>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={userInfoBack.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={userInfoBack.lastName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={userInfoBack.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={userInfoBack.password}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={handleSaveClick}>
                        Save
                    </button>
                    <button type="button" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}
    
    
export default ProfileCard;