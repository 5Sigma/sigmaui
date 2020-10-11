import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React from "react"
import { Css } from "../util/Css"
import { Tooltip } from "react-tippy"
import { Popover } from "./Popover"
import { Icon } from "./Icon"


interface MenuProps {
  children?: React.ReactNode
}

export function Menu(props: MenuProps) {
  return (
    <div className="ui menu">
      {props.children}
    </div>
  )
}

interface ItemProps {
  label?: React.ReactNode | string
  icon?: IconProp
  active?: boolean
  header?: string
  subheader?: string
  css?: string
}


Menu.Item = function (props: ItemProps) {
  const css = Css().add(props.css).add("item").if(props.active, "active").styles
  return (
    <div className={css}>
      {props.icon && <Icon size="lg" icon={props.icon} />}
      {props.label && (
        <span className="text">
          {props.label}
        </span>
      )}
    </div>
  )
}

Menu.Dropdown = function (props: React.PropsWithChildren<ItemProps>) {

  const content = (
    <div className="ui dropdown">
      {props.children}
    </div>
  )

  return (
    <Tooltip interactive html={content} position="bottom-start" theme="light" trigger="click" distance={3}>
      <Menu.Item css={(props.css || "") + " menu-dropdown"} {...props} />
    </Tooltip >
  )
}

interface DropDownItemProps {
  header?: boolean
  label?: string
  icon?: IconProp
  danger?: boolean
  primary?: boolean
}

Menu.DropDownItem = function (props: DropDownItemProps) {

  const css = Css().add("dropdown-item").if(props.danger, "danger").if(props.primary, "primary").styles
  
  return (
    <div className={css}>
      {props.icon && (
        <Icon icon={props.icon} />
      )}
      {props.label && (
        <span className="text">
          {props.label}
        </span>
      )}
    </div>
  )
}

Menu.Popover = function (props: React.PropsWithChildren<ItemProps>) {
  const trigger = (
    <Menu.Item {...props} />
  )

  return (
    <Popover trigger={trigger}>
      {props.children}
    </Popover>
  )
}


export function ColumnMenu(props: React.PropsWithChildren<unknown>) {
  return (
    <div className="ui column-menu">
      {props.children}
    </div>
  )
}

interface ColumnMenuColumnProps {
  header?: string
}

ColumnMenu.Column = function (props: React.PropsWithChildren<ColumnMenuColumnProps>) {
  return (
    <div className="column">
      {props.header && (
        <div className="header">{props.header}</div>
      )}
      {props.children}
    </div>
  )
}

interface ColumnMenuItemProps {
  label?: string
  onClick?: () => void
}

ColumnMenu.Item = function (props: ColumnMenuItemProps) {
  return (
    <div className="item" onClick={props.onClick}>
      {props.label}
    </div>
  )
}