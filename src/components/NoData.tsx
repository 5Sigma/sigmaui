import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import React from "react"
import { Icon } from "./Icon"
import {Header} from "./Header"
import {faBan} from "@fortawesome/pro-light-svg-icons"

interface NoDataProps {
    header?: string
    icon?: IconDefinition
}

export function NoData(props:NoDataProps) {
  const icon = (props.icon || faBan) 
  return (
    <div className="ui nodata">
      <Header centered size="small">
        <Icon icon={icon} size="2x" color="#888" />
        {props.header} 
      </Header>
    </div>
  )
}