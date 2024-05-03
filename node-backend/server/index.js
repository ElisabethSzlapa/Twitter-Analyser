const express = require("express");
const axios = require("axios");
const cors = require("cors");
const { Rettiwt } = require("rettiwt-api");

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const rettiwtInstance = new Rettiwt({apiKey: process.env.RETTIWT_API_KEY});

app.get('/api/tweets', async (req, res) => {
    const {user, count} = req.query;

    try {
        const tweets = await rettiwtInstance.tweet.search({
            fromUsers: [user],
            count: count
        });
        console.log("User:", user);
        console.log(tweets);
        res.json(tweets);
    }
    catch (error){
        console.error(error);
        res.status(500).json({ message: 'Error fetching tweets' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})