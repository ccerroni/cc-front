import Row from "react-bootstrap/esm/Row"
import { Counter } from "./Counter/Counter"
import Col from "react-bootstrap/esm/Col"
import Button from "react-bootstrap/esm/Button"
import ButtonGroup from "react-bootstrap/esm/ButtonGroup"


export const RenderPropsExample: React.FC = () => {
  return (
    <>
      <h1 className="">Render Props Example Page</h1>
      <hr />
      <Counter render={(count, increment, decrement) => (
        <Row className="align-items-center">
          <Col sm={3}>
            <h2>Counter: {count}</h2>
          </Col>
          <Col>
            <ButtonGroup size="lg" className="mb-2">
              <Button variant="outline-info" onClick={increment}>+</Button>
              <Button variant="outline-info" onClick={decrement}>-</Button>
            </ButtonGroup>
          </Col>
        </Row>
      )} />
    </>
  )
}