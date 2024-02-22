
import Card from 'react-bootstrap/Card';
import  Col  from 'react-bootstrap/Col';

function CardItems({img,title,price}) {
  return (
    <Col sm={6} md={4} lg={3}>
    <Card style={{ height: '600px' }}>
      <Card.Img style={{ height: '70%'  }}variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {price}$
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
  );
}

export default CardItems;