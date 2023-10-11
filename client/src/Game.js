import { useState, useEffect } from 'react';

//Pygame component will be imported here

function Game() {

    const [ userScores, setUserScores ] = useState([]);
    const [ loggedIn, setLoggedIn ] = useState(false);
    const [ newScore, setNewScore ] = useState(null);

    //get URL and test
    // useEffect(() => {
    //     // Fetch top scores (for all users) here
    //     fetch('/api/topscores')
    //         .then((response) => response.json())
    //         .then((data) => setUserScores(data));

    //     if (loggedIn) {
    //         // Fetch user's scores here and update setUserScores
    //         fetch('/api/userscores')
    //             .then((response) => response.json())
    //             .then((data) => setUserScores((prevScores) => [...prevScores, ...data]));
    //     }
    // }, [loggedIn]);

    // const handleNewScore = (score) => {
    //     // Save the new score for the logged-in user and update userScores
    //     // Example API request:
    //     fetch('/api/userscores', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ score }),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setNewScore(data);
    //             setUserScores((prevScores) => [...prevScores, data]);
    //         });
    // };
    
    return (
        <div className='game-container'>
            <div className='game-panel'>
                {/* Embeded Pygame component will go here */}
                {/* <PygameComponent onScoreChange={ handleNewScore } /> */}
            </div>
            <div className='score-panel'>
                <h2>Top Scores</h2>
                {/* <ul>
                    {userScores
                        .sort((a, b) => b.score - a.score)
                        .slice(0, 10)
                        .map((score, index) => (
                            <li key={index}>
                                {score.username}: {score.score}
                            </li>
                        ))}
                </ul> */}
            </div>
            
        </div>
    );
}
    
    
export default Game;