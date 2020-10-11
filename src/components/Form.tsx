import React, { ChangeEvent } from "react"
import Select, { Styles, OptionsType, GroupedOptionsType } from "react-select"
import {Tooltip as Tippy} from "react-tippy"

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
    value?: string | number | null
    required?: boolean
    placeholder?: string
    input?: React.ReactNode
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onFocus?: () => void
    onBlur?: () => void
}

Form.Input = function(props:InputProps) {

  const input = props.input ||  (
    <input 
      className="ui input" 
      onChange={props.onChange} 
      onFocus={props.onFocus}
      placeholder={props.placeholder} />
  )

  return (
    <div className="ui field">
      <label>
        {props.label}
      </label>
      {input}
    </div>
  )
}

interface SelectData {
  label: string
  value: string | number | undefined
}

interface SelectProps {
  label?: string
  options?: OptionsType<SelectData> | GroupedOptionsType<SelectData>
  onInputChange?: (v:string) => void;
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

interface SelectData {
  label: string
  value: string | number | undefined
}

interface SelectProps {
  label?: string
  loading?: boolean
  options?: OptionsType<SelectData> | GroupedOptionsType<SelectData>
  onInputChange?: (v:string) => void;
  placeholder?: string
}


Form.Select = function(props: SelectProps) {
  return (
    <div className="ui field">
      <label>
        {props.label}
      </label>
      <Select 
        isLoading={props.loading}
        styles={selectStyle} 
        placeholder={props.placeholder}
        options={props.options} 
        onInputChange={props.onInputChange} />
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

interface DatePickerProps extends InputProps {
  value?: string
}

function DateInput (props: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  const picker = (
    <div>
      sdfasdf
    </div>
  )

  return (
    <Tippy trigger="manual" interactive html={picker} open={open}>
      <Form.Input {...props} 
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)} />
    </Tippy>
  )
}

Form.DateInput = DateInput