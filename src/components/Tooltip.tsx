import React, { ReactElement, ReactNode } from "react"
import { Tooltip as TooltipBase } from "react-tippy"

interface TooltipProps {
  children: ReactElement
  content: string
}
export function Tooltip(props: TooltipProps) {
  return (
    <TooltipBase title={props.content} popperOptions={{style: {padding: "5px"}}}>
      {props.children}
    </TooltipBase>
  )
}