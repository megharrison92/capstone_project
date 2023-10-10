import ProfileCard from "./ProfileCard";

function AccountInfo() {

    const user = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
    };

    return (
        <div>
            <div className='account-container'>
                <h1>Account Information</h1>
                <ProfileCard user={user}/>
            </div>
        </div>
    );
}
    
    
export default AccountInfo;