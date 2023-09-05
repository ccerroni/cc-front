import Row from "react-bootstrap/esm/Row";
import { Character } from "../../../models/Character";
import Col from "react-bootstrap/esm/Col";
import Image from 'react-bootstrap/esm/Image';

interface ItemDetailsProps {
  item: Character,
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({ item }) => {

  return (
    <Row>
      <Col>
        <Image src={item.image} width={200} height={200} rounded />
      </Col>
      <Col>
        <p>Id: {item.id}</p>
        <p>Gender: {item.gender}</p>
        <p>Location: {item.location?.name}</p>
        <p>Species: {item.species}</p>
        <p>Status: {item.status}</p>
        <p>Type: {item.type}</p></Col>
    </Row>
  );
}