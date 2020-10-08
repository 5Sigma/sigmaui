import React from "react"
import { Panel, Header, Button } from "../index"
import { faUsers } from "@fortawesome/pro-light-svg-icons"

export default function () {
  return (
    <>
      <Header dividing size="large">
        Buttons
      </Header>
      <Panel header="Buttons">
        <div>
          <Button loading content="Loading Button" />
        </div>
        <div>
          <Button content="Standard Button" />
          <Button icon={faUsers} content="Icon Button" />
          <Button icon={faUsers} />
          <Button.Popover content="Popover Button">
            Popover content
          </Button.Popover>
          <Button.Tooltip content="Tooltip Button" tooltip="This is a tooltip" />
        </div>
        <div>
          <Button primary content="Primary Button" />
          <Button danger content="Danger Button" />
        </div>
      </Panel>
    </>
  )
}