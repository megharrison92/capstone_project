import LoginRegisterCard from "./LoginRegisterCard";
// create login form and register from components for this page
//the login/register will flip to the other side depending if you are logged in

const getRandomGreeting = () => {
    const greetings = [
        "Welcome to Mystic Maeves - Where your destiny awaits!",
        "Greetings, seeker of fortunes and games!",
        "Step into the world of Mystic Maeves, where mysteries unfold!"
    ];

    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
};

function Home() {
    
    const greeting = getRandomGreeting();

    return (
        <div>
            <h2>{ greeting }</h2>
            <LoginRegisterCard />
        </div>
    )
}
    
    
export default Home;