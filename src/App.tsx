import React from "react";
import "./App.css";
import Htag from "./components/Htag/Htag";
import PostContainer from "./components/PostContainer/PostContainer";

function App(): JSX.Element {
  return (
    <div className="App">
      <Htag tag="h1" onClick={() => console.log("click")}>
        title
      </Htag>
      <PostContainer>posts</PostContainer>
    </div>
  );
}

export default App;
