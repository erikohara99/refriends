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
                <div class="post">
                    <div class="post-user-info">
                        <p>Erik</p>
                        <p>Today</p>
                    </div>
                    <p class="post-user-comment">Hey Dwindle can you check under there for me?</p>
                    <div class="divider"></div>
                    <input class="post-comment-box" placeholder="Type a reply..."></input>
                    <div class="post-user-comments">
                        <div class="comment">
                            <div class="post-user-info">
                                <p>Erik</p>
                                <p>Today</p>
                            </div>
                            <p class="post-user-comment">Hey Dwindle can you check under there for me?</p>
                        </div>
                        <div class="comment">
                            <div class="post-user-info">
                                <p>Erik</p>
                                <p>Today</p>
                            </div>
                            <p class="post-user-comment">Hey Dwindle can you check under there for me?</p>
                        </div>
                        <div class="comment">
                            <div class="post-user-info">
                                <p>Erik</p>
                                <p>Today</p>
                            </div>
                            <p class="post-user-comment">Hey Dwindle can you check under there for me?</p>
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.posts.map(post => {

                        var date = new Date(Date.parse(post.date)).toUTCString();

                        return(
                            <div class="post">
                                <div class="post-user-info">
                                    <p>{post.username}</p>
                                    <p>{date}</p>
                                </div>
                                <p class="post-user-comment">{post.post}</p>
                                <div class="divider"></div>
                                <input class="post-comment-box" placeholder="Type a reply..."></input>
                            </div>
                        )
                    })}
                </div>
            </div>
         );
    }
}
 
export default Posts;