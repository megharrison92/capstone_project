import { useState, useEffect } from 'react';

//Pygame component will be imported here

function Game() {

    // const [ userScores, setUserScores ] = useState([]);
    // const [ loggedIn, setLoggedIn ] = useState(false);
    // const [ newScore, setNewScore ] = useState(null);

    
    return (
        <div className='game-container'>
            <div className='game-message'>
                <h2>Mystic Maeve and the stolen futures</h2>
                <p>
                    Someone has stolen Mystic Maeves crystal ball!
                    Help Maeve get her crystal ball back before her customers stop by for the day!
                </p>
                <p className='game-maintaince'>
                    We're sorry, Mystic Maeve and the stolen futures, is currently down for maintaince, please try again later.
                </p>
            </div>
            <div className='game-panel'>
                {/* Embeded Pygame component will go here */}
                {/* <PygameComponent onScoreChange={ handleNewScore } /> */}
            </div>
            <div className='score-panel'>
                {/* <h2>Top Scores</h2> */}
            </div>
            
        </div>
    );
}
    
    
export default Game;