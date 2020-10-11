import React from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { Icon } from "./Icon"

interface LabelProps {
    content?: string
    detail?: string
    icon?: IconProp
}

export function Label(props: LabelProps) {
  return (
    <div className="ui label">
      {props.icon && (
        <div className="label-icon">
          <Icon icon={props.icon} />
        </div>
      )}
      { props.detail && (
        <div className="detail">
          {props.detail}
        </div>
      )}
      <div className="content">
        {props.content}
      </div>
    </div>
  )
}

interface LabelGroupProps {
    children: React.ReactNode
}

Label.Group = function(props: LabelGroupProps) {
  return(
    <div className="ui label-group">
      {props.children}
    </div>
  )
}