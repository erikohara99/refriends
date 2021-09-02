import React, { Component } from 'react';
const axios = require('axios');

class Posts extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3000/posts");
        console.log(response.data);
        this.setState({posts: response.data});
    }

    render() { 
        return (
            <div class="post-container">
                <div>
                    {this.state.posts.map(post => {

                        post.date = new Date(Date.parse(post.date)).toUTCString();

                        return(
                            <div class="post">
                                <div class="post-user-info">
                                    <p>{post.username}</p>
                                    <p>{post.date}</p>
                                </div>
                                <p class="post-user-comment">{post.post}</p>
                                <div class="divider"></div>
                                <input class="post-comment-box" placeholder="Type a reply..."></input>
                                <div class="post-user-comments">
                                    {post.comments.map(comment => {

                                        comment.date = new Date(Date.parse(post.date)).toUTCString();

                                        return(
                                            <div class="comment">
                                                <div class="post-user-info">
                                                    <p>{comment.username}</p>
                                                    <p>{comment.date}</p>
                                                </div>
                                                <p class="post-user-comment">{comment.post}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default Posts;