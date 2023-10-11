import { useState } from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


function LoginRegisterCard() {
    
    const [ isFlipped, setIsFlipped ] = useState(true);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    
    return(
        <div >
            <div className='card-inner'>
                {isFlipped ? 
                <div className="card-front" >
                    <LoginForm />
                    <p>
                        Don't have an account?
                        <span className='link' onClick={ handleFlip }>
                            Register here!
                        </span>
                    </p>
                </div>
                :
                <div className="card-front" >
                    <RegisterForm />
                    <p>
                        Have an account?
                        <span className='link' onClick={ handleFlip }>
                            Login here!
                        </span>
                    </p>
                </div>}
            </div>
        </div>
    );

};

export default LoginRegisterCard