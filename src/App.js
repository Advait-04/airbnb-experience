import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./components/data.js";

console.log(data);

export default function App() {
    const cards = data.map((item) => {
        return (
            <Card
                key={item.id}
                coverImg={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.country}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
                location={item.location}
            />
        );
    });
    return (
        <div className="main">
            <Navbar />
            <Hero />
            <div className="cards">{cards}</div>
        </div>
    );
}
