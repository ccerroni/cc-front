import Row from "react-bootstrap/esm/Row";
import { ComponentA } from "./ComponentA/ComponentA";
import withNumberIncrease from "./hoc/withNumberIncrease";
import Col from "react-bootstrap/esm/Col";

export const HocExample: React.FC = () => {

  const ComponentB = withNumberIncrease(ComponentA);

  return (
    <Row>
      <h1>Hoc example Page</h1>
      <Col>
        <h3>Component A without hoc</h3>
        <ComponentA text="Without HOC" quantity={10} /></Col>
      <Col>
        <h3>Component B using A in hoc</h3>
        <ComponentB text="with HOC" quantity={10} /></Col>

    </Row>
  )
};
