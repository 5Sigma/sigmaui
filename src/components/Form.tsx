import React from "react"
import Select, { Styles, OptionsType, GroupedOptionsType} from "react-select"

export interface FormProps {
    children: React.ReactNode
}

export function Form(props:FormProps) {
  return (
    <form className="ui form">
      {props.children}
    </form> 
  )
}

interface InputProps {
    label?: string
}

Form.Input = function(props:InputProps) {
  return (
    <div className="ui field">
      <label>
        {props.label}
      </label>
      <input className="ui input" />
    </div>
  )
}

interface SelectProps {
  label?: string
  options?: OptionsType<{ label: string; value: string; }> | GroupedOptionsType<{ label: string; value: string; }>
}


const selectStyle:Styles = {
  option: (provided) => ({
    ...provided,
  }),
  control: (provided) => ({
    ...provided,
    border: "1px solid #eee",
    outline: "none",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #eee",
    }
  })
}

Form.Select = function(props: SelectProps) {
  return (
    <div className="ui field">
      <label>
        {props.label}
      </label>
      <Select styles={selectStyle} options={props.options} />
    </div>
  )
}

interface SwitchProps {
  label?: string
  checked?: boolean
}
 
Form.Switch = function(props:SwitchProps) {
  return (
    <div className="ui switch-field">
      <label className="ui switch">
        <input type="checkbox" checked={props.checked} />
        <span className="slider"></span>
      </label>
      {props.label && (
        <div className="label">{props.label}</div>
      )}
    </div>
  )
}