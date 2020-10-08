import { ReactElement, ReactNode } from "react"

import React from "react"
import { Size } from "../util/Sizing"
import { Css } from "../util/Css"
import { Color } from "../util/Colors"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface HeaderProps {
  content?: ReactElement | string
  size?: Size
  dividing?: boolean
  color?: Color
  icon?: IconProp
  centered?: boolean
  top?: boolean
}


export function Header(
  {
    size = "medium",
    ...props
  }: React.PropsWithChildren<HeaderProps>) {

  const css = Css()
    .add("ui header")
    .add(size,)
    .add(props.color)
    .if(props.top, "top")
    .if(props.dividing, "dividing")
    .if(props.centered, "centered")
    .styles

  return (
    <div className={css}>
      {props.icon && (
        <FontAwesomeIcon icon={props.icon} className="icon" />
      )}
      {props.children || props.content}
    </div>
  )
}


export interface SubHeaderProps {
  content?: ReactElement | string
  children?: ReactNode
}

function SubHeader(props: SubHeaderProps) {
  return (
    <div className="subheader">
      {props.content || props.children}
    </div>
  )
}


Header.SubHeader = SubHeader