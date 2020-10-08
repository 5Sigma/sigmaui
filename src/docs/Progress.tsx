import React from "react"
import { Progress, Panel, Header } from "../index"

export default function () {
  return (
    <>
      <Header dividing size="large">Progress</Header>
      <Panel>
        <Progress value={10} max={100} />
      </Panel>
      <Panel bare>
        <Panel.Header content="Progress panel footer" />
        <Panel.Content>
          Progress bars can be attached in the footer of a panel
          </Panel.Content>
        <Panel.ProgressFooter value={10} max={100} />
      </Panel>
    </>
  )
}