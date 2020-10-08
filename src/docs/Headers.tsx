import React from "react"
import { Header, Panel } from "../index"

export default function () {
  return (
    <>
      <Header dividing size="large">
        Headers
      </Header>
      <Panel header="Header sizes">
        <Header size="small">Small</Header>
        <Header size="medium">Medium</Header>
        <Header size="large">Large</Header>
        <Header size="huge">Huge</Header>
      </Panel>
      <Panel header="Header colors">
        <Header dividing>Dividing Header</Header>
        <Header color="red">Red</Header>
        <Header color="green">Green</Header>
        <Header color="blue">Blue</Header>
        <Header color="purple">Purple</Header>
      </Panel>
      <Panel header="Other variations">
        <Header>
          Subheader
            <Header.SubHeader>This header has a subheader defined for it</Header.SubHeader>
        </Header>
        <Header centered>
          Centered
            <Header.SubHeader>This header is centered</Header.SubHeader>
        </Header>
        <Header dividing>
          Dividing header
        </Header>
      </Panel>
    </>
  )
}