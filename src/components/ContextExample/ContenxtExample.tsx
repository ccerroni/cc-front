import { ExampleContextProvider } from "../../context/exampleContext"
import { FirstChild } from "./FirstChild/FirstChild"

export const ContextExample: React.FC = () => {
  return(
    <>
      <h1>Example of Context</h1>
      <hr />
      <ExampleContextProvider>
        <FirstChild />
      </ExampleContextProvider>
    </>
  )

}