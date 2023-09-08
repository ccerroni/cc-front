import Row from "react-bootstrap/esm/Row";
import { useExampleContextWithHook } from "../../../context/exampleContext";
import { ThirdChild } from "../ThirdChild/ThirdChild"
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/esm/Form";

export const SecondChild: React.FC = () => {
  const { valueInContext, setValueInContext } = useExampleContextWithHook();
  return (
    <div>
      <h4>Second Child</h4>
      <p>This is the value in context: {valueInContext}</p>
      <p></p>
      <Row>
        <Col>
          <Form.Label htmlFor="input1">Change context value just typing here</Form.Label>
          <Form.Control
            type="text"
            id="input1"
            placeholder="Change the context value"
            aria-label="Change the context value"
            
            value={valueInContext}
            onChange={(e) => setValueInContext(e.target.value)}
          />
        </Col>
      </Row>

      <hr />
      <ThirdChild />
    </div>
  )
}