import Row from "react-bootstrap/esm/Row"
import { Counter } from "./Counter/Counter"
import Col from "react-bootstrap/esm/Col"
import Button from "react-bootstrap/esm/Button"
import ButtonGroup from "react-bootstrap/esm/ButtonGroup"


export const RenderPropsExample: React.FC = () => {
  return (
    <>
      <h1 className="mb-8">Render Props Example Page</h1>

      <Counter render={(count, increment, decrement) => (
        <Row>
          <Col sm={2}>
            <ButtonGroup size="lg" className="mb-2">
              <Button variant="outline-info" size="lg" onClick={increment}>+</Button>
              <Button variant="outline-info" size="lg" onClick={decrement}>-</Button>
            </ButtonGroup>
          </Col>
          <Col sm={10}>
            <h2>Counter: {count}</h2>
          </Col>
          
        </Row>
      )

      } />
    </>
  )
}