import React from "react"

interface ColumnsProps {
  columns: Array<string | number>
  children: React.ReactNode
  gap?: number
}

export function Columns(props: ColumnsProps) {
  const gridTemplateColumns = props.columns.map(i => {
    switch (typeof i) {
    case "string": return i
    case "number": return `${i}fr`
    }
  }).join(" ")
  const columnGap = props.gap || "10px"
  return (
    <div className="ui columns" style={{ gridTemplateColumns, columnGap }}>
      {props.children}
    </div>
  )
}