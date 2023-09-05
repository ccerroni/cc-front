import { Button } from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";
import CloseButton from "react-bootstrap/esm/CloseButton";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

interface CardInfoProps {
  title: string;
  isOpen: boolean;
  children: React.ReactElement;
  onCloseInfo: () => void;
}

export const CardContainer: React.FC<CardInfoProps> = ({ title, isOpen, onCloseInfo, children }) => {
  if (!isOpen) return null;
  return (
    <Card>
      <Card.Header>
        <Row>
          <Col sm={11}>{title}</Col>
          <Col sm={1} className="text-end"><CloseButton onClick={onCloseInfo} /></Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
        <Button variant="primary" onClick={onCloseInfo} >Close</Button>
      </Card.Body>
    </Card>
  );
}