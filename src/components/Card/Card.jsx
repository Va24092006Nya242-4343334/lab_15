import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 10px 0;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const CardButton = styled.button`
  padding: 12px 18px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

const Card = ({ title, description, image, onClick }) => {
  return (
    <CardWrapper>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton onClick={onClick}>Детальніше</CardButton>
    </CardWrapper>
  );
};

export default Card;
