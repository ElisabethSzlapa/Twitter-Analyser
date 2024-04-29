import React from 'react';
import axios from 'axios';

import UserSearch from "../UserSearch/UserSearch";
import react from "react";

axios.defaults.baseURL = 'http://localhost:3001';

const Home = () => {
    const [user, setUser] = react.useState("");
    const [tweets, setTweets] = React.useState([]);

    function handleSubmit() {
        console.log('submitting');
        if (user) {
            axios.get(`/api/tweets?user=${user}`)
                .then(response => {
                    setTweets(response.data);
                    console.log(tweets);
                })
                .catch(error => console.log(error));
        }
    }

    return(
        <div>
            <UserSearch setUser={setUser} onSubmit={handleSubmit}/>
        </div>
    )
}

export default Home;