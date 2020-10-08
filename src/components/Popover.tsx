import React, { ReactElement, ReactNode } from "react";
import { Tooltip } from "react-tippy";

interface PoopoverProps {
  children: ReactNode
  trigger: ReactElement
  noArrow?: boolean
  animation?: "perspective" | "shift" | "fade" | "scale" | "none"
}

export function Popover(props: PoopoverProps) {


  const content = (
    <div className="ui popover">
      {props.children}
    </div>
  )

  return (
    <Tooltip trigger="mouseenter" interactive
      arrow={!props.noArrow}
      animation={props.animation || "perspective"}
      html={content} theme="light">
      {props.trigger}
    </Tooltip>
  )
}