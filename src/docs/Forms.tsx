import React from "react"
import {Panel, Form, Columns} from "../components"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

export default () => {
  return (
    <div>
      <Panel>
        <Columns columns={[1,1]}>
          <Form.Input label="First name" />
          <Form.Input label="Last name" />
        </Columns>
        <Form.Select label="Flavor" options={options}  />
        <Form.Switch label="Enabled" />
      </Panel>
    </div>
  )
}