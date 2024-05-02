import React from 'react';
import axios from 'axios';

import UserSearch from "../UserSearch/UserSearch";
import TweetsDisplay from '../TweetsDisplay/TweetsDisplay';
import react from "react";
import AnalysisChart from "../AnalysisChart/AnalysisChart";

axios.defaults.baseURL = 'http://localhost:3001';

const Home = () => {
    const [user, setUser] = react.useState("");
    const [tweets, setTweets] = React.useState([]);
    const [analysedTweets, setAnalysedTweets] = React.useState([]);

    function handleSubmit() {
        console.log('submitting');
        // if (user) {
        //     axios.get(`/api/tweets?user=${user}`)
        //         .then(response => {
        //             setTweets(response.data);
        //             console.log(response.data);
        //         })
        //         .catch(error => console.log(error));
        // }
        if (user) {
            axios.get(`/api/analyse?user=${user}&count=${5}`)
                .then(response => {
                    setAnalysedTweets(response.data);
                    console.log(response.data);
                })
                .catch(error => console.log(error));
        }
    }

    return(
        <div>
            <UserSearch setUser={setUser} onSubmit={handleSubmit}/>
            {/*<TweetsDisplay tweets={tweets}/>*/}
            <AnalysisChart analysedTweets={analysedTweets} />
        </div>
    )
}

export default Home;