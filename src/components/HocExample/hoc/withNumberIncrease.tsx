import Row from "react-bootstrap/esm/Row";
import { ComponentAProps } from "../ComponentA/ComponentA";

export default function withNumberIncrease(WrappedComponent: React.FC<ComponentAProps>) {
  console.log(`[${WrappedComponent.name}] is using withNumberIncrease HOC`);

  return (props: ComponentAProps) => (
    <div>
      &#x1F632;
      <Row>
        <WrappedComponent text={props.text} quantity={props.quantity * 100} />
      </Row>
      &#x1F632;
    </div>
  );
}