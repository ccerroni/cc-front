import { ComponentA } from "./ComponentA/ComponentA";
import withNumberIncrease from "./hoc/withNumberIncrease";

export const HocExample: React.FC = () => {

  const ComponentB = withNumberIncrease(ComponentA);

  return (
    <div className="m-8">
      <h1 className="text-3xl">Hoc example Page</h1>
      <div className="flex">
        <div>
          <h3>Component A without hoc</h3>
          <ComponentA text="Without HOC" quantity={10} />
        </div>
        <div>
          <h3>Component B using A in hoc</h3>
          <ComponentB text="with HOC" quantity={10}/>
        </div>
      </div>
      
    </div>
  )
};
