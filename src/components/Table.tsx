import React, { CSSProperties } from "react"
import { Css } from "../util/Css"
import { Button } from "./Button"
import {faEllipsisH} from "@fortawesome/pro-solid-svg-icons"
import {Popover} from "./Popover"

interface CellProps {
  collapsing?: boolean
  colSpan?: number | string
  rowSpan?: number | string
  width?: number | string
  onClick?: () => void
}

interface TableProps {
  celled?: boolean
}

export function Table(props: React.PropsWithChildren<TableProps>) {
  const css = Css().add("ui table").if(props.celled, "celled").styles
  return (
    <table className={css}>
      {props.children}
    </table>
  )
}

Table.Header = function (props: React.PropsWithChildren<Record<string, unknown>>) {
  return (
    <thead>
      {props.children}
    </thead>
  )
}

Table.Body = function (props: React.PropsWithChildren<Record<string, unknown>>) {
  return (
    <tbody>
      {props.children}
    </tbody>
  )
}

Table.Footer = function (props: React.PropsWithChildren<Record<string, unknown>>) {
  return (
    <tfoot>
      {props.children}
    </tfoot>
  )
}

interface TableRowProps {
  selectable?: boolean
  onClick?: () => void
}

Table.Row = function (props: React.PropsWithChildren<TableRowProps>) {
  const css = Css().if(!!props.selectable, "selectable").styles
  return (
    <tr className={css} onClick={props.onClick}>
      {props.children}
    </tr>
  )
}

Table.Cell = function (props: React.PropsWithChildren<CellProps>) {
  const css = Css().if(props.collapsing, "collapsing").styles
  const styles: CSSProperties = {}
  if (props.width) {
    styles.width = props.width
  }
  return (
    <td className={css} style={styles} colSpan={parseInt(props.colSpan?.toString() || "1")} rowSpan={parseInt(props.rowSpan?.toString() || "1")} onClick={props.onClick}>
      {props.children}
    </td>
  )
}

interface ActionCellProps {
  children?: React.ReactNode
}

Table.ActionCell = function(props: ActionCellProps) { 
  return (
    <Table.Cell collapsing>
      <Button.Dropdown basic icon={faEllipsisH}>
        {props.children}
      </Button.Dropdown>
    </Table.Cell>
  )
}

Table.HeaderCell = function (props: React.PropsWithChildren<CellProps>) {
  const css = Css().if(props.collapsing, "collapsing").styles
  const styles: CSSProperties = {}
  if (props.width) {
    styles.width = props.width
  }
  return (
    <th className={css} style={styles}>
      {props.children}
    </th>
  )
}