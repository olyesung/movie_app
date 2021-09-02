import React from "react";

function Potato({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1> Hello!!!!</h1>
      <Potato fav="kimchi" />
      <Potato fav="ramen" />
    </div>
  );
}

export default App;
