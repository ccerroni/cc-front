import { useState } from "react";
import { useExampleContextWithHook } from "../../../context/exampleContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


export const ThirdChild: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const { valueInContext, setValueInContext } = useExampleContextWithHook();

  const handleClick = () => {
    setValueInContext(inputText);
  }
  return (
    <div>
      <h4>Third Child</h4>
      <p>This is the value in context: {valueInContext}</p>
      <Row>
        <Col>
          <Form.Control
            type="text"
            id="input1"
            placeholder="Change the context value"
            aria-label="Change the context value"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </Col>
        <Col>
          <Button variant="primary" onClick={handleClick} >Comp 3 - Set Context</Button>
        </Col>
      </Row>
    </div>
  )
}