import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MenuItem from "./components/MenuItem";
import Navbar from "./components/Navbar";
import ShowDeals from "./components/ShowDeals";
import SignUp from "./components/SignUp";
import data from "./data.json";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MenuItem />

      {data.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          trendingIn={card.trendingIn}
          highlights={card.highlights}
          rating={card.rating}
          ratingComment={card.ratingComment}
        />
      ))}

      <ShowDeals />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
