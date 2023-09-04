import { Counter } from "./Counter/Counter"

export const RenderPropsExample: React.FC = () => {
  return (
    <div className="m-8">
      <h1 className="text-3xl">Render Props Example Page</h1>

      <Counter render={(count, increment, decrement) => (
        <div>
          <h2 className="mb-4 mt-4 text-2xl text-purple-500">Counter: {count}</h2>

          <div className="flex gap-x-4">
            <button className="rounded-md bg-purple-500 p-2 text-white hover:bg-purple-400 touch:bg-purple-100" onClick={increment}>Increment</button>
            <button className="rounded-md bg-purple-500 p-2 text-white hover:bg-purple-400" onClick={decrement}>Decrement</button>
          </div>
        </div>
      )

      } />
    </div>
  )
}