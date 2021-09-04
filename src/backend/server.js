const express = require('express');
const app = express();
const cors = require('cors');
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})
app.use(express.json());
const mongoose = require('mongoose');
const { getNodeText } = require('@testing-library/react');

app.options("*", cors());

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

app.get("/posts/:id", async (req, res) => {
    try{
        const posts = await Post
            .find({})
            .lean();
        
        res.status(200).send(posts);
    }
    catch(ex){
        console.log("POSTS COULD NOT BE LOADED FROM DATABASE.");
        res.status(500).send("POSTS COULD NOT BE LOADED FROM DATABASE.");
    }
});

app.post("/posts", async (req, res) => {
    try{
        const post = new Post({
            username: req.body.username,
            post: req.body.post,
            date: Date.now(),
            comments: []
        });
    
        const result = await post.save();
        res.status(200).send(result);
    }
    catch(ex) {
        console.log(ex);
        res.status(400).send(ex);
    }
});

app.post("/comment", async (req, res) => {
    try{
        const post = await Post.findById(req.body.id);
        console.log(post);
        if(!post) return;

        const comment = {
            date: Date.now(),
            post: req.body.comment
        };

        post.comments.push(comment);
        const result = await post.save();
        return res.status(200).send(result);
    }
    catch(ex) {
        console.log(ex);
        return res.status(400).send(ex);
    }
});

app.listen(3000, "0.0.0.0", () => {console.log("Server listening...")});