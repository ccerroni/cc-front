import Button from "react-bootstrap/esm/Button";
import { SecondChild } from "../SecondChild/SecondChild"
import { useExampleContextWithHook } from "../../../context/exampleContext";

export const FirstChild: React.FC = () => {
  const { valueInContext, setValueInContext } = useExampleContextWithHook();
  const handleClick = () => {
    setValueInContext('')
  }
  return (
    <div>
      <h4>First Child</h4>
      <p>This is the value in context: {valueInContext}</p>
      <Button variant="primary" onClick={handleClick} >Clear Context</Button>
      <hr />
      <SecondChild />
    </div>
  )
}