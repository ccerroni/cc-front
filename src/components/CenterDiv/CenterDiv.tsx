import { useState } from "react"
import "./CenterDiv.css"

export enum CenterBy {
  FLEXBOX = 'FLEXBOX',
  CSS = 'CSS',
  NONE = 'NONE'
}

export const CenterDiv = () => {

  
  const [method, setMethod] = useState<CenterBy>(CenterBy.NONE)

  const getContainerClass = () => {
    switch (method) {
      case CenterBy.FLEXBOX:
        return 'container-flexbox'
      case CenterBy.CSS: 
        return 'container-css'
      default:
        return ''
    }
  }

  return (
    <div className="root">
      <button onClick={() => setMethod(CenterBy.FLEXBOX)}>With Flexbox</button>
      <button onClick={() => setMethod(CenterBy.CSS)}>Without Flexbox</button>
      <button onClick={() => setMethod(CenterBy.NONE)}>clear</button>
      <div className={getContainerClass()}>
        {method === CenterBy.NONE ? (<p>I'm not centered</p>) : (
          <p>I'm centerd by {method}</p>
        )}
      </div>
    </div>
  )
}