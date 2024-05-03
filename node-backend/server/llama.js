const express = require("express");
const axios = require("axios");
const cors = require("cors");

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const { default: ollama} = require("ollama");

app.get('/api/llama', async (req, res) => {
    const {prompt} = req.query;
    try {
        console.log(prompt);
        const response = await ollama.chat({
            model: 'llama3',
            messages: [{role: 'user', content: prompt}],
        })
        res.json(response);
    }
    catch (error){
        console.error(error);
        res.status(500).json({message: 'Llama error'});
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})