import { useState } from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


function LoginRegisterCard() {
    
    const [ isFlipped, setIsFlipped ] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    
    return(
        <div >
            <div className={`card-inner ${isFlipped ? 'flipped' : '' }`}>
                <div className="card-front" onClick={ handleFlip }>
                    <LoginForm />
                    <p>
                        Don't have an account?
                        <span className='link' onClick={ handleFlip }>
                            Register here!
                        </span>
                    </p>
                </div>
                <div className="card-back" onClick={ handleFlip }>
                    <RegisterForm />
                    <p>
                        Have an account?
                        <span className='link' onClick={ handleFlip }>
                            Login here!
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );

};

export default LoginRegisterCard