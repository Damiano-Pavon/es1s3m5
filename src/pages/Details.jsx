import React from 'react';
import { useParams } from 'react-router-dom';
import fantasy from "../components/Data/fantasy.json";

const Details = () => {
  const { id } = useParams();
  const book = fantasy.find(card => card.asin === id);



  const { title, img, price } = book;

  return (
    <div>
      
      <img style={{width: "300px"}} src={img}  />
      <h2>{title}</h2>
      <h3>Price: {price}$</h3>
    </div>
  );
}

export default Details;
