

function RegisterForm() {
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
            <p>
                Have an account?
                <span className='link'>
                    Login here!
                </span>
            </p>
        </div>
    )
}
    
    
export default RegisterForm;