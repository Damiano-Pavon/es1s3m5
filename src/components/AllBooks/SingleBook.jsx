import Card from 'react-bootstrap/Card';
import  Col  from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function SingleBook({img,title,price,id}) {
  return (
    <Col sm={6} md={4} lg={3}>
    <Card style={{ height: '600px' }}>
      <Card.Img style={{ height: '70%'  }}variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {price}$
        </Card.Text>
        <Link to={`/book/${id}`}>
          <button>Dettagli</button>
        </Link>
       </Card.Body>
    </Card>
    </Col>
  );
}

export default SingleBook;

