import React from 'react';
import axios from 'axios';

import UserSearch from "../UserSearch/UserSearch";
import TweetsDisplay from '../TweetsDisplay/TweetsDisplay';
import TweetsDisplayEmbedded from '../TweetsDisplayEmbedded/TweetsDisplayEmbedded'
import react from "react";
import AnalysisChart from "../AnalysisChart/AnalysisChart";

axios.defaults.baseURL = 'http://localhost:3001';

const Home = () => {
    const [user, setUser] = react.useState("");
    const [count, setCount] = react.useState(5);
    const [passToAI, setPassToAI] = React.useState(false);
    const [tweets, setTweets] = React.useState([]);
    const [analysedTweets, setAnalysedTweets] = React.useState([]);

    function handleSubmit() {
        if (user && !passToAI) {
            console.log('Fetching tweets');
            axios.get(`/api/tweets?user=${user}&count=${count}`)
                .then(response => {
                    setTweets(response.data);
                    console.log(response.data);
                })
                .catch(error => console.log(error));
        }
        else if (user) {
            axios.get(`/api/analyse?user=${user}&count=${count}`)
                .then(response => {
                    setAnalysedTweets(response.data);
                    console.log(response.data);
                })
                .catch(error => console.log(error));
        }
    }

    return(
        <div>
            <UserSearch setUser={setUser} setPassToAI={setPassToAI} setCount={setCount} onSubmit={handleSubmit}/>
            {/*{!passToAI && <TweetsDisplay tweets={tweets}/>}*/}
            {!passToAI && <TweetsDisplayEmbedded tweets={tweets}/>}
            {passToAI && <AnalysisChart analysedTweets={analysedTweets}/>}
        </div>
    )
}

export default Home;