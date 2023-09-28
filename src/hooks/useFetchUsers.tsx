import { useEffect, useRef, useState } from "react"
// import { User } from "../models/RandomUserApiData"
import { publicRuntimeConfig } from "../config/local"
import { User } from "../models/RandomUserApiData"

export const useFetchUsers = () => {

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const originalUsers = useRef<User[]>([])
  const resolver = async () => {
    try {
      const response = await fetch(publicRuntimeConfig.randomUserUrl)
      const res = await response.json()
      if(res.results) {
        setUsers(res.results)
        originalUsers.current = res.results;
      }
      setIsLoading(false)  
    } catch (error) {
      setError(true)
      setIsLoading(false)
      console.error(error)
    }
    
  }

  useEffect(() => {
    const abortController = new AbortController()
    resolver()

    return () => {
      abortController.abort()
    }
    
  }, [])

  return {
    users,
    setUsers,
    originalUsers: originalUsers.current,
    error,
    isLoading
  }

}