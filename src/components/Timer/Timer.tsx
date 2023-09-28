import { useCallback, useEffect, useState } from "react"
import { Alert } from "react-bootstrap"

export const Timer = () => {
  const [timer, setTimer] = useState(10)

  const decrementTimer = useCallback(() => {
    console.log('executing decrementTimer')
    setTimer((oldTimer) => oldTimer - 1)
  }, [])

  useEffect(() => {
    if (timer <= 0) {
      return
    }
    const timeoutFunction = setInterval(decrementTimer, 1000)
    return () => clearInterval(timeoutFunction);
  }, [decrementTimer, timer])

  return (
    <div>
      <Alert
        variant={timer > 0 ? "danger" : "success"}>
        This message will turn green in {timer} seconds
      </Alert>
    </div>
  )
}