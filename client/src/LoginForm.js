

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
        </div>
    )
}
    
    
export default LoginForm;