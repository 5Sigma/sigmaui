import React from "react"
import { Css } from "../util/Css"

interface CellProps {
  collapsing?: boolean
  colSpan?: number | string
  rowSpan?: number | string
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

Table.Header = function (props: React.PropsWithChildren<{}>) {
  return (
    <thead>
      {props.children}
    </thead>
  )
}

Table.Body = function (props: React.PropsWithChildren<{}>) {
  return (
    <tbody>
      {props.children}
    </tbody>
  )
}

Table.Footer = function (props: React.PropsWithChildren<{}>) {
  return (
    <tfoot>
      {props.children}
    </tfoot>
  )
}

interface TableRowProps {
  onClick?: () => void;
}

Table.Row = function (props: React.PropsWithChildren<TableRowProps>) {
  const css = Css().if(!!props.onClick, "selectable").styles
  return (
    <tr className={css}>
      {props.children}
    </tr>
  )
}

Table.Cell = function (props: React.PropsWithChildren<CellProps>) {
  const css = Css().if(props.collapsing, "collapsing").styles
  return (
    <td className={css} colSpan={parseInt(props.colSpan?.toString() || "1")} rowSpan={parseInt(props.rowSpan?.toString() || "1")}>
      {props.children}
    </td>
  )
}

Table.HeaderCell = function (props: React.PropsWithChildren<CellProps>) {
  const css = Css().if(props.collapsing, "collapsing").styles
  return (
    <th className={css}>
      {props.children}
    </th>
  )
}