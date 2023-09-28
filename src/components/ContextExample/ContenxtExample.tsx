import { FirstChild } from "./FirstChild/FirstChild"
import { ExampleContextProvider } from "../../context/exampleContext"

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