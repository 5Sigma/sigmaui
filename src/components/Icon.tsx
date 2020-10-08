import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import React from "react"

type IconProps = FontAwesomeIconProps

export function Icon(props: IconProps) {
  return (
    <FontAwesomeIcon {...props} className="icon" />
  )
}