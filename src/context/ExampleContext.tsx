import { createContext, useContext, useMemo, useState } from "react";

type ExampleContextType = {
  valueInContext: string;
  setValueInContext: (value: string) => void;
}

const initValue: ExampleContextType = {
  valueInContext:'initial-value',
  setValueInContext: () => {}
}

const ExampleContext = createContext<ExampleContextType>(initValue)

type ExampleContextProviderProps = {
  children: React.ReactElement;
}

export const ExampleContextProvider = ({children} : ExampleContextProviderProps) => {
  const [valueInContext, setValueInContext] = useState<string>(initValue.valueInContext)

  const providerValues = useMemo(() => ({valueInContext, setValueInContext}), [valueInContext])

  return (
    <ExampleContext.Provider value={providerValues}>
      {children}
    </ExampleContext.Provider>
  )
}

export const useExampleContextWithHook = () => {
  const context = useContext(ExampleContext);
  return context;
}