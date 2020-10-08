import React, { ReactNode } from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faChevronDown } from "@fortawesome/pro-light-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icon } from "./Icon"
import { Progress, ProgressProps } from "./Progress"
import { Button } from "./Button"

export interface PanelProps {
  children: ReactNode
  bare?: boolean
  header?: string
}

export function Panel(props: PanelProps) {

  const children = props.bare ? props.children : <Panel.Content>{props.children}</Panel.Content>

  return (
    <div className="ui panel">
      {props.header && (
        <Panel.Header>{props.header}</Panel.Header>
      )}
      {children}
    </div>
  )
}

export interface PanelHeaderProps {
  children?: ReactNode
  content?: ReactNode | string
  icon?: IconProp
}

function Header(props: PanelHeaderProps) {
  return (
    <div className="panel-header panel-header-component">
      {props.icon && (
        <FontAwesomeIcon className="icon" icon={props.icon} />
      )}
      {props.content || props.children}
    </div>
  )
}
Panel.Header = Header

interface PanelActionHeaderProps extends PanelHeaderProps {
  content: string
  children?: ReactNode
}

function ActionHeader(props: PanelActionHeaderProps) {
  return (
    <div className="action-header panel-header-component">
      <Panel.Header {...props} content={props.content} />
      <div className="actions">
        {props.children}
      </div>
    </div>
  )
}
Panel.ActionHeader = ActionHeader

interface HeaderActionProps {
  icon: IconProp
}

Panel.HeaderAction = function (props: HeaderActionProps) {
  return (
    <div className="header-action">
      <Icon icon={props.icon} />
    </div>
  )
}


function Content(props: React.PropsWithChildren<{}>) {
  return (
    <div className="content">
      {props.children}
    </div>
  )
}

Panel.Content = Content

Panel.ProgressFooter = function (props: ProgressProps) {
  return (
    <div className="panel-footer seemless">
      <Progress {...props} />
    </div>
  )
}

Panel.LoadMoreFooter = function () {
  return (
    <div className="panel-footer" style={{ textAlign: "center" }}>
      <Button basic icon={ faChevronDown } />
    </div>
  )
}
