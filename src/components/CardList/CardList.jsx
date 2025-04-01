import React from "react";
import styled from "styled-components";
import Card from "../Card/Card";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  padding: 30px;
`;

const CardList = ({ data, onCardClick }) => {
  return (
    <ListWrapper>
      {data.map((item) => (
        <Card 
          key={item.id} 
          title={item.title} 
          description={item.description} 
          image={item.image} 
          onClick={() => onCardClick(item)}
        />
      ))}
    </ListWrapper>
  );
};

export default CardList;
