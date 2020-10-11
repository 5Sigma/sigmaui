import { ReactElement, ReactNode } from "react"

import React from "react"
import { Size } from "../util/Sizing"
import { Css } from "../util/Css"
import { Color } from "../util/Colors"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { Icon } from "./Icon"

export interface HeaderProps {
  content?: ReactElement | string
  subheader?: string
  size?: Size
  dividing?: boolean
  color?: Color
  icon?: IconProp
  centered?: boolean
  top?: boolean
  actions?: boolean
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
    .if(props.actions, "actions")
    .styles

  return (
    <div className={css}>
      <HeaderContent>
        {props.icon && (
          <Icon icon={props.icon}/>
        )}
        {props.content || props.children}
        {props.subheader && (
          <SubHeader>{props.subheader}</SubHeader>
        )}
      </HeaderContent>
      {props.actions && (
        <div className="actions">
          {props.children}
        </div>
      )}
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

interface HeaderContentProps {
  children: React.ReactNode
}

function HeaderContent(props: HeaderContentProps) {
  return (
    <div className="header-content">
      {props.children}
    </div>
  )
}

interface HeaderActionProps {
  icon?: IconProp
  content?: string
  onClick?: () => void
}

function HeaderAction(props: HeaderActionProps) {
  return (
    <div className="header-action" onClick={props.onClick}>
      {props.icon && (
        <Icon icon={props.icon} />
      )}
      {props.content && (
        <div className="header-action-label">
          {props.content}
        </div>
      )}
    </div>
  )
}

Header.Action = HeaderAction