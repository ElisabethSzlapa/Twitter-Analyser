const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { Rettiwt } = require("rettiwt-api");
const { default: ollama} = require("ollama");

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const rettiwtInstance = new Rettiwt({apiKey: process.env.RETTIWT_API_KEY});

const prompt = "Put the following Tweet into one of the three following categories: 'politics'," +
    " 'humour', 'technology', or 'other'. Please ONLY return one (1) of these four words, with ABSOLUTELY NO other text preceding or following." +
    " Input follows this sentence and will be of the format 'username: <username>, content: <tweet content>', where username is the Twitter username of the author, and content is the content of the tweet."

app.get('/api/analyse', async (req, res) => {
    const {user, count} = req.query;
    console.log(`getting ${count} tweets`);

    try {
        const tweets = await rettiwtInstance.tweet.search({
            fromUsers: [user]
        }, parseInt(count));
        console.log(tweets);
        const categorisedTweets = await Promise.all(tweets.list.map(async tweet => {
            console.log(tweet.fullText);
            const category = await ollama.chat({
                model: 'llama3',
                messages: [{role: 'user', content: `username: ${tweet.tweetBy.fullName} content: ${tweet.fullText}`}],
                keep_alive: 1,
            });
            return {
                fullText: tweet.fullText,
                category: category
            };
        }));

        res.json(categorisedTweets);
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: 'Tweet or llama error'});
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})