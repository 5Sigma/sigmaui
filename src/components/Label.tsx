import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React from "react"

interface LabelProps {
    content?: string
    icon?: IconProp
}

export function Label(props: LabelProps) {
  return (
    <div className="ui label">
      {props.content}
    </div>
  )
}