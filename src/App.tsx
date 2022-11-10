import React from "react";
import "./App.css";
import Htag from "./components/Htag/Htag";
import PostContainer from "./components/PostContainer/PostContainer";

function App(): JSX.Element {
  return (
    <div className="App">
      <PostContainer>posts</PostContainer>
    </div>
  );
}

export default App;
