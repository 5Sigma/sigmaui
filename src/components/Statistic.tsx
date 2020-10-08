import React from "react"


interface StatisticProps {
  label?: string
  value?: number | string
  children?: React.ReactNode
}

export function Statistic(props: StatisticProps) {
  return (
    <div className="ui statistic">
      <div className="statistic-value">
        {props.children}
      </div>
      <div className="statistic-label">
        {props.label}
      </div>
    </div>
  )
}

interface StatisticGroupProps {
  children: React.ReactNode
}

Statistic.Group = function (props: StatisticGroupProps) {
  return (
    <div className="ui statistic-group">
      {props.children}
    </div>
  )
}