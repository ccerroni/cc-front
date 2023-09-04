
export interface ComponentAProps {
  text: string;
  quantity: number;
}

export const ComponentA: React.FC<ComponentAProps> = ({text, quantity}) => {
  return (
    <div className="m-8">
      <p>Text: {text}</p>
      <p>Quantity: {quantity}</p>
    </div>
  )
};