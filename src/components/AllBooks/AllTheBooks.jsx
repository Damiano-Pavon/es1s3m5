import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SingleBook from './SingleBook';
import fantasy from "../Data/fantasy.json"
function Books() {
 

  return (
    <Container>
      <Row gap={5}>
        {fantasy.map((card) => {
          return (
            <SingleBook
              key={card.asin}
              title={card.title}
              img={card.img}
              price={card.price}
              id={card.asin}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default Books;




