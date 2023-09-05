import Row from "react-bootstrap/esm/Row";

export interface ComponentAProps {
  text: string;
  quantity: number;
}

export const ComponentA: React.FC<ComponentAProps> = ({text, quantity}) => {
  return (
    <Row>
      <p>Text: {text}</p>
      <p>Quantity: {quantity}</p>
    </Row>
  )
};