import React from "react"
import { Header, Panel } from "../index"
import { faSync, faEdit } from "@fortawesome/pro-light-svg-icons"

export default function () {
  return (
    <>
      <Header dividing size="large">
        Panels
        </Header>
      <Panel>
        this panel has no additional components and simply pads its contents
        </Panel>
      <Panel header="Simple Header Panel">
        This panel has a simple header
        </Panel>
      <Panel bare>
        <Panel.ActionHeader content="Action Header">
          <Panel.HeaderAction icon={faSync} />
          <Panel.HeaderAction icon={faEdit} />
        </Panel.ActionHeader>
        <Panel.Content>
          Panels can have action items included in the header
          </Panel.Content>
      </Panel>
    </>
  )
}