import ProfileCard from "./ProfileCard";
import { useState } from 'react';
import ProfileCardEdit from "./ProfileCardEdit";


function AccountInfo() {

    const [ edit, setEdit ] = useState(false)

    const handleClick = () => {
        setEdit(!edit)
    }

    return (
        <div>
            {  edit ? 
            <div className='account-container'>
                <ProfileCardEdit />
            </div>
            :
            <div className='account-container'>
                <h1>Account Information</h1>
                <ProfileCard />
            </div>
            }
             <button type="button" onClick={handleClick}>
                {edit ? 'Discard Changes' : 'Edit Information' }
            </button>
        </div>
    );
}
    
    
export default AccountInfo;