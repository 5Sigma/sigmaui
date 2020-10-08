import React, { useState } from "react"
import { Icon } from "./Icon"
import {faSearch} from "@fortawesome/pro-light-svg-icons"
import {IconProp} from "@fortawesome/fontawesome-svg-core"
import {Tooltip} from "react-tippy"

export interface SearchProps<T> {
  getResults: (s: string) => Array<T>
  renderItem: (item:T, index: number) => React.ReactNode
}

export function Search<T> (props: SearchProps<T>) {
  const [value, setValue] = useState("")
  const [results, setResults] = useState<Array<T>>([])

  const onChange = (v: string) => {
    setValue(v)
    setResults(props.getResults(v))
  }

  const resultElement = (
    <div className="ui search-results">
      {results.map(props.renderItem)}
    </div>
  )

  return (
    <Tooltip open={results.length > 0 && value.length > 0 } interactive html={resultElement} theme="light" position="bottom-start" trigger="manual" distance={3} style={{display: "block"}} onRequestClose={() => setValue("")}>
      <div className="ui search">
        <Icon icon={faSearch} />
        <input autoComplete="off" value={value} type="text" className="ui search" onChange={(e) => onChange(e.target.value)} />
      </div>
    </Tooltip>
  )
}


export interface SearchItemProps {
  title: string
  icon?: IconProp
  onClick?: () => void
}

Search.Item = function(props: SearchItemProps) {
  return (
    <div className="search-item" onClick={props.onClick}>
      {props.icon && (
        <React.Fragment>
          <Icon icon={props.icon} />
          {props.title}
        </React.Fragment>
      )}
    </div>    
  )
}