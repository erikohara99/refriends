import React, { Component } from 'react';
const axios = require('axios');

class PostBox extends Component {
    state = { 
        chars: 0,
        error: ""
     }

    handleSubmitPost = async e => {
        const name = document.getElementById("postname").value;
        const post = document.getElementById("posttext").value;

        var error = this.state.error;

        if(post.length == 0 || name.length == 0){
            e.preventDefault();
            error = "POST ERROR: Neither field can be left blank. Try again.";
            return this.setState({error});
        };

        const response = await axios.post("http://108.183.209.49:3000/posts", {
            username: name,
            post: post
        });
        return response;
    }

    render() { 
        return ( 
            <div className="postbox">
                <h1>Refriends</h1>
                <h3>Anonymity to the Max - what's on your mind today?</h3>
                <form onSubmit={this.handleSubmitPost}>
                    <input id="postname" placeholder="Name"></input>
                    <textarea id="posttext" placeholder="Post text here..."></textarea>
                    <h4 id="post-error">{this.state.error || null}</h4>
                    <div id="postbox-buttons">
                        <button type="submit">SUBMIT</button>
                        <button type="reset">CLEAR</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default PostBox;