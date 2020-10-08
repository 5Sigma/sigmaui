import React from "react"


export interface ProgressProps {
  value?: number
  max?: number
}

export function Progress({ value = 0, max = 100 }: ProgressProps) {
  return (
    <div className="ui progress">
      <div className="filled" style={{ width: `${value / max * 100}%` }}></div>
    </div>
  )
}