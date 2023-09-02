import { useEffect, useState } from "react";
import { publicRuntimeConfig } from "../config/local"
import { FetchResponse, RickAndMortyResponse } from "../models/ApiData";


export const useFetch  = (): FetchResponse => {
  const [response, setResponse] = useState<RickAndMortyResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  
  const resolver = async () => {
    try {
      const response = await fetch(`${publicRuntimeConfig.rickAndMortyUrl}/character`);
      const data = await response.json();
      setResponse(data);
      setIsLoading(false);

    } catch (err) {
      setError(true);
      console.error(err)
    }      
  }

  useEffect(() => {
    const abortController = new AbortController();
    resolver();

    //this will be excecuted when the component is unmounted
    return () => {
      abortController.abort();
    }

  }, []);

  return {
    response,
    isLoading,
    error
  }

}


