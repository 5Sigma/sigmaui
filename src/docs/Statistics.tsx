import React from "react"
import { Statistic, Panel, Header } from "../index"


export default function () {
  const [number, setNumber] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setNumber(number+1)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [number])

  return (
    <React.Fragment>
      <Header dividing size="large">Statistics</Header>
      <Panel header="Grouped Statistics">
        <Statistic.Group>
          <Statistic label="Customers">{number}</Statistic>
          <Statistic label="Sales">$14.00</Statistic>
          <Statistic label="Appointments">10</Statistic>
        </Statistic.Group>
      </Panel>
    </React.Fragment>
  )

}