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

    handleComment = async (e, id) => {

        const replyId = id + "-reply";
        const comment = document.getElementsByName(replyId)[0].value;
        
        if (comment.length === 0){
            e.preventDefault();
            return null;
        };

        const body = {
            id: id,
            comment: comment
        };

        await axios.post("http://192.168.0.174:3000/comment", body);
    }

    render() { 

        if(this.state.posts.length === 0) return <h1 className="error">No posts could be found.</h1>

        return (
            <div className="post-container">
                <div>
                    {this.state.posts.map(post => {

                        post.date = new Date(Date.parse(post.date)).toUTCString();
                        const commentName = post._id + "-reply";

                        return(
                            <div className="post" id={post._id}>
                                <div className="post-user-info">
                                    <p>{post.username}</p>
                                    <p>{post.date}</p>
                                </div>
                                <p className="post-user-comment">{post.post}</p>
                                <div className="divider"></div>
                                <form onSubmit={(e) => {this.handleComment(e, post._id)}}>
                                    <input id="post-comment-box" name={commentName} placeholder="Type a reply..."></input>
                                    <button id="button-comment-reply" type="submit">Reply</button>
                                </form>
                                <div className="post-user-comments">
                                    {post.comments.map(comment => {

                                        comment.date = new Date(comment.date).toUTCString();

                                        return(
                                            <div className="comment">
                                                <div className="post-user-info">
                                                    <p>Anonymous</p>
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