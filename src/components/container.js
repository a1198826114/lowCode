import { useState } from "react";
import Card from "./card";
import {nanoid} from 'nanoid'
function Container() {
  console.log(nanoid(3),6767)
  const moveCard = (dragIndex, hoverIndex) => {
      const dragCard=cards[dragIndex]
      let cloneCards=[...cards]
      console.log(cards,66)
      cloneCards.splice(dragIndex,1)
      console.log(cloneCards,88)
      cloneCards.splice(hoverIndex,0,dragCard)
      console.log(cloneCards,77)
      setCards(cloneCards)
  };
  const [cards,setCards] = useState([
    {
      text: "卡片1",
      id: "1",
    },
    {
      text: "卡片2",
      id: "2",
    },
    {
      text: "卡片3",
      id: "3",
    },
  ]);
  return (
    <div style={{ width: "300px" }}>
      {cards.map((item,index) => (
        <Card
          key={item.id}
          text={item.text}
          id={item.id}
          index={index}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
}

export default Container;
