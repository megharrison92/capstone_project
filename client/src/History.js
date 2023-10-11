import { useState, useEffect, useContext } from 'react';
import { UserContext } from './context/user.js'


function History() {

    const [ userHistory, setUserHistory] = useState([]);
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);

    const { user } = useContext(UserContext)

    useEffect( () => {
        if (isLoggedIn) {
            //this is to fetch the user history
            fetch('URL')
                .then(response => response.json())
                .then(data => setUserHistory(data))
                .catch((error) => console.error('Error fetching history:', error));
        }
    }, [ isLoggedIn] );
    
    return (
        <div>
            <h2>User History</h2>
            { isLoggedIn ? ( userHistory.length > 0 ?(
                <ul>
                    { userHistory.map(( item, index) => (
                        <li key={index}>
                            <strong>Question:</strong> { item.question }<br />
                            <strong>Response:</strong> { item.response }<br />
                            <strong>Liked:</strong>{ item.liked ? 'Yes' : 'No' }<br />
                            <strong>Comments:</strong>
                            <ul>
                                {item.comments.map((comment, commentIndex) => (
                                    <li key={ commentIndex }>{comment}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No history available.</p>
            )
        ) : (
            <p>Please log in to view your hostory.</p>
        )}
        </div>
    );
}
    
    
export default History;