import { ComponentAProps } from "../ComponentA/ComponentA";

export default function withNumberIncrease (WrappedComponent: React.FC<ComponentAProps>) {
  console.log(`[${WrappedComponent.name}] is using withNumberIncrease HOC`);
    
  return (props: ComponentAProps) =>(
    <div className="bg-indigo-500 text-white">
      <div>
        &#x1F632;<WrappedComponent text={props.text} quantity={props.quantity *100}/>&#x1F632;
      </div>
      
    </div>
  );
}