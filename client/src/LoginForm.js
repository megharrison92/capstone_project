

function LoginForm() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <input 
                    type="text"
                    placeholder="Username"
                />
                <input 
                    type="text"
                    placeholder="Password"
                />
                <button type='button'>Login</button>
            </form>
            <p>
                Don't have an account?
                <span className='link'>
                    Register here!
                </span>
            </p>
        </div>
    )
}
    
    
export default LoginForm;