import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import zaferes from '../public/images/zaferes.png'
import data from "./data";

function App() {
  const mapCards = data.map((item) => {
    return (
      <Card
        key = {item.id}
        {...item}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <Hero />
      <section className="card-container">{mapCards}</section>
    </div>
  );
}

export default App;
