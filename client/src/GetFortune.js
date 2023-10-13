import { useState } from 'react';


function randomResponse() {
    const responses = [
        "Fate favors the bold. Take a chance!",
        "Life's journey  is full of twists and turns. Trust your instincts.",
        "Your success is determined by your efforts.",
        "Believe in your dreams and work towards them.",
        "Life is full of delightful surpprices. Stay curious.",
        "Happiness comes from within. Seek balance and joy",
        "Trust your gut feeling. It often leads you in the right direction.",
        "Fortune favors the prepared mind. Be ready for opportunities.",
        "Change can bring growth and new opportunities.",
        "Your creativity knows no bounds. Express yourself.",
        "I'm sorry, the future is uncertain. Keep working toward your goals.",
        "Yes",
        "No",
        "Maybe",
        "Try again later",
        "Outlook not so good",
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
};

function GetFortune() {
    
    const [ response, setResponse ] = useState('');
    const [ liked, setLiked ] = useState(false);
    const [ comment, setComment] = useState('');
    const [ comments, setComments ] = useState([]);
    const [ question, setQuestion ] = useState('');
    

    const handleLike = () => {
        setLiked(!liked);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const submitComment = () => {
        if (comment.trim() !== '') {
            setComments([ ...comments, comment]);
            setComment('');
        }
    };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };
    
    
    return (
        <div>
            <div className='get-fortune-container'>
                <div className='question-container'>
                    <input 
                        type='text'
                        placeholder='Ask a question'
                        value={ question }
                        onChange={ handleQuestionChange }
                    />
                </div>
                <div className='response-container'>
                    <img 
                        src='https://www.pngall.com/wp-content/uploads/15/Crystal-Ball-PNG-HD-Image.png'
                        alt="crystal Ball"
                        onClick={ () => setResponse(randomResponse()) }
                    />
                    <p>{ response }</p>
                    <button onClick={ handleLike } className={ liked ? 'liked' : '' }>
                        Like
                    </button>
                </div>
                <div className='comments-container'>
                    { comments.map(( c, index ) => (
                        <div key={index} className='comment'>{c}</div>
                    ))}
                    <textarea 
                        placeholder="Leave a comment..."
                        value={ comment }
                        onChange={ handleCommentChange }
                    />
                    <button onClick={submitComment}>Submit Comment</button>
                </div>
            </div>
        </div>
    )
}
    
    
export default GetFortune;