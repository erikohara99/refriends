import React from 'react';
import './App.css';
import PostBox from './components/PostBox';
import Posts from './components/Posts';

function App() {
  return (
    <React.Fragment>
      <PostBox />
      <Posts />
    </React.Fragment>
  );
}

export default App;
