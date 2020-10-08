import React from "react"
import { Header, Panel, Table, Button } from "../index"

export default function () {
  return (
    <>
      <Header dividing size="large">
        Tables
      </Header>
      <Header>Simple table</Header>
      <Panel bare>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Alice</Table.Cell>
              <Table.Cell>18</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Bob</Table.Cell>
              <Table.Cell>19</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Panel.LoadMoreFooter />
      </Panel>
      <Header>Celled Table</Header>
      <Panel bare>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell collapsing> </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>1 is the id</Table.Cell>
              <Table.Cell>Alice</Table.Cell>
              <Table.Cell>18</Table.Cell>
              <Table.Cell>4.99</Table.Cell>
              <Table.Cell collapsing><Button content="Test Button"/></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Bob</Table.Cell>
              <Table.Cell>19</Table.Cell>
              <Table.Cell>15.99</Table.Cell>
              <Table.Cell collapsing><Button content="Test Button"/></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>
      <Header>Selectable Table</Header>
      <Panel bare>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row onClick={() => ({})}>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Alice</Table.Cell>
              <Table.Cell>18</Table.Cell>
              <Table.Cell>4.99</Table.Cell>
            </Table.Row>
            <Table.Row onClick={() => ({})}>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Bob</Table.Cell>
              <Table.Cell>19</Table.Cell>
              <Table.Cell>15.99</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Panel>
      <Header>Footer Table</Header>
      <Panel bare>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell collapsing>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Alice</Table.Cell>
              <Table.Cell>18</Table.Cell>
              <Table.Cell>4.99</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>Bob</Table.Cell>
              <Table.Cell>19</Table.Cell>
              <Table.Cell>15.99</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.Cell colSpan="3">2 People</Table.Cell>
              <Table.Cell>15.99</Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Panel>
    </>
  )
}
