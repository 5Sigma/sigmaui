import React from "react"
import {Modal, Button, Header, Panel} from "../components"

export default function() {

  const [open, setOpen] = React.useState(false)

  return (
    <React.Fragment>
      <Header dividing size="large">Modals</Header>
      <Panel>
        <Button onClick={() => setOpen(true)} content="Open Modal" />
        <Modal open={open} title="Title" onClose={() => setOpen(false)}>
          <Modal.Content>
            Test modal
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => setOpen(false) } primary content="Ok"/>
            <Button onClick={() => setOpen(false) } content="Cancel"/>
          </Modal.Actions>
        </Modal>
      </Panel>
    </React.Fragment>
  )
}