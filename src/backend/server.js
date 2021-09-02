const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/refriends')
    .then(() => {console.log("Connected to database successfully!")})
    .catch((ex) => {console.log("ERROR: ", ex)});

const schema = new mongoose.Schema({
    username: String,
    date: {
        type: Date,
        default: Date.now()
    },
    post: String,
    comments: [Object]
});

const Post = mongoose.model('posts', schema);

app.get("/posts", async (req, res) => {
    try{
        const posts = await Post
            .find({})
            .sort({date: -1})
            .lean();
        
        res.status(200).send(posts);
    }
    catch(ex){
        console.log("POSTS COULD NOT BE LOADED FROM DATABASE.");
        res.status(500).send("POSTS COULD NOT BE LOADED FROM DATABASE.");
    }
});

app.listen(3000, () => {console.log("Server listening...")});