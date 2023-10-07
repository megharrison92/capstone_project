import { useState } from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const FlipCard = () => {
    const [ isFlipped, setIsFlipped ] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
}


function LoginRegisterCard() {
    return(
        <div className={`flip-card ${isFlipped ? 'flipped' : ""}`}>
            <div className="card-inner">
                <div className="card-front">
                    <LoginForm />
                </div>
                <div className="card-back">
                    <RegisterForm />
                </div>
            </div>
        </div>
    );

};

export default LoginRegisterCard