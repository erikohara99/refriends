import React, { Component } from 'react';

class PostBox extends Component {
    state = { 
        chars: 0
     }
    render() { 
        return ( 
            <div className="postbox">
                <h1>Refriends</h1>
                <h3>Anonymity to the Max - what's on your mind today?</h3>
                <form>
                    <input id="postname" placeholder="Name"></input>
                    <textarea id="posttext" placeholder="Post text here..."></textarea>
                    <div id="postbox-buttons">
                        <button type="submit">SUBMIT</button>
                        <button>CLEAR</button>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default PostBox;