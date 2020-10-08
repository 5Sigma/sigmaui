import React from "react"
import {Icon} from "./Icon"
import {faTimes} from "@fortawesome/pro-light-svg-icons"

interface ModalProps {
    open?: boolean
    title: string
    children: React.ReactNode
    onClose?: () => void
}

export function Modal(props:ModalProps) {
  return (
    <React.Fragment>
      {props.open && (
        <React.Fragment>
          <div className="ui backdrop" onClick={props.onClose}></div>
          <div className="ui modal">
            {props.title && (
              <ModalHeader title={props.title} onClose={props.onClose} />
            )}
            {props.children}
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

interface ModalHeaderProps {
    title: string
    onClose?: () => void
}

function ModalHeader (props: ModalHeaderProps) {
  return (
    <div className="modal-header">
      {props.title}
      <Icon icon={faTimes} onClick={props.onClose}/>
    </div>
  )    
}

Modal.Header = ModalHeader

interface ModalContentProps {
    children: React.ReactNode
}

function ModalContent (props: ModalContentProps) {
  return (
    <div className="modal-content">
      {props.children}
    </div>
  )
}

Modal.Content = ModalContent

interface ModalActionsProps {
    children: React.ReactNode
} 

function ModalActions (props: ModalActionsProps) {
  return (
    <div className="modal-actions">
      {props.children}
    </div>
  )
}

Modal.Actions = ModalActions