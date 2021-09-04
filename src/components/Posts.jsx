import React, { Component } from 'react';
const axios = require('axios');

class Posts extends Component {
    state = {
        posts: []
    }

    async componentDidMount() {
        const response = await axios.get("http://192.168.0.174:3000/posts");
        console.log(response.data);
        this.setState({posts: response.data});
    }

    render() { 
        return (
            <div className="post-container">
                <div>
                    {this.state.posts.map(post => {

                        post.date = new Date(Date.parse(post.date)).toUTCString();

                        return(
                            <div className="post">
                                <div className="post-user-info">
                                    <p>{post.username}</p>
                                    <p>{post.date}</p>
                                </div>
                                <p className="post-user-comment">{post.post}</p>
                                <div className="divider"></div>
                                <input className="post-comment-box" placeholder="Type a reply..."></input>
                                <div className="post-user-comments">
                                    {post.comments.map(comment => {

                                        comment.date = new Date(Date.parse(post.date)).toUTCString();

                                        return(
                                            <div className="comment">
                                                <div className="post-user-info">
                                                    <p>{comment.username}</p>
                                                    <p>{comment.date}</p>
                                                </div>
                                                <p className="post-user-comment">{comment.post}</p>
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