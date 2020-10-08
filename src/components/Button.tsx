import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { Icon } from "./Icon"
import React from "react"
import { Css } from "../util/Css"
import { Popover } from "./Popover"
import { Tooltip } from "./Tooltip"
import {faSpinner} from "@fortawesome/pro-light-svg-icons"

interface ButtonProps {
  content?: string
  onClick?: () => void
  icon?: IconDefinition
  primary?: boolean
  danger?: boolean
  basic?: boolean
  loading?: boolean
}

export function Button(props: ButtonProps) {

  const css = Css()
    .add("ui button button-component")
    .if(props.icon && !props.content, "icon-only")
    .if(props.primary, "primary")
    .if(props.danger, "danger")
    .if(props.basic, "basic")
    .styles

  return (
    <button className={css} onClick={props.onClick}>
      {(props.icon || props.loading) && (
        <Icon icon={(props.loading === true ? faSpinner : props.icon) as IconDefinition} spin={props.loading} />
      )}
      <span>{props.content}</span>
    </button>
  )
}


interface ButtonPopoverProps extends ButtonProps {
  children: React.ReactElement | string
}

Button.Popover = function (props: ButtonPopoverProps) {
  const { children, ...buttonProps } = props
  return (
    <span className="ui button-component">
      <Popover noArrow animation="shift" trigger={<Button {...buttonProps} />}>
        {children}
      </Popover>
    </span>
  )
}

interface ButtonTooltipProps extends ButtonProps {
  tooltip: string
}

Button.Tooltip = function (props: ButtonTooltipProps) {
  const { tooltip, ...buttonProps } = props

  return (
    <span className="ui button-component">
      <Tooltip content={tooltip}>
        <Button {...buttonProps} />
      </Tooltip>
    </span>
  )
}