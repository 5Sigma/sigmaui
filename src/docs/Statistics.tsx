import React from "react"
import { Statistic, Panel, Header } from "../index"


export default function () {

  return (
    <>
      <Header dividing size="large">Statistics</Header>
      <Panel header="Grouped Statistics">
        <Statistic.Group>
          <Statistic label="Customers">47</Statistic>
          <Statistic label="Sales">$14.00</Statistic>
          <Statistic label="Appointments">10</Statistic>
        </Statistic.Group>
      </Panel>
    </>
  )

}