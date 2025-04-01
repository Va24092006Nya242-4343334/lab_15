import React from "react";
import CardList from "./components/CardList/CardList";
import { cardsData } from "./data";

function App() {
  const handleCardClick = (card) => {
    alert(`Ви вибрали: ${card.title}`);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Дикі тварини</h1>
      <CardList data={cardsData} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
