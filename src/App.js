// App.js
import React from "react";
import PostPresenter from "./presenters/PostPresenter";

const App = () => {
  return (
    <div className="App">
      <h1>Posts from jsonplaceholder.typicode.com (MVP)</h1>
      <PostPresenter />
    </div>
  );
};

export default App;
