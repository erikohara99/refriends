import React, { Component } from 'react';

class Posts extends Component {
    state = {  }
    render() { 
        return (
            <div class="post-container">
                <div class="post">
                    <div class="post-user-info">
                        <p>Dwindle</p>
                        <p>Today</p>
                    </div>
                    <p class="post-user-comment">Under where? xD</p>
                    <div class="divider"></div>
                    <input class="post-comment-box" placeholder="Type a reply..."></input>
                </div>
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
                <div class="post">
                    <div class="post-user-info">
                        <p>TsarBubbles</p>
                        <p>Today</p>
                    </div>
                    <p class="post-user-comment">Spock sucks</p>
                    <div class="divider"></div>
                    <input class="post-comment-box" placeholder="Type a reply..."></input>
                </div>
                <div class="post">
                    <div class="post-user-info">
                        <p>TsarBubbles</p>
                        <p>Today</p>
                    </div>
                    <p class="post-user-comment">This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. This will be a multiline comment. </p>
                    <div class="divider"></div>
                    <input class="post-comment-box" placeholder="Type a reply..."></input>
                </div>
            </div>
         );
    }
}
 
export default Posts;