import React, { CSSProperties, ReactNode } from "react"
import { Css } from "../util/Css"

export interface ContainerProps {
  children: ReactNode
  centered?: boolean
  maxWidth?: number
}

export function Container(props: ContainerProps) {
  const css = Css().add("ui container").if(props.centered, "centered").styles
  const style: CSSProperties = {}

  if (props.maxWidth) {
    style.maxWidth = props.maxWidth
  }

  return (
    <div className={css} style={style}>
      { props.children}
    </div>
  )
}