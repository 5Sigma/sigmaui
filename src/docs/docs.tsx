import React from "react"
import ReactDOM from "react-dom"
import { Container } from "../index"
import Menus from "./Menus"
import Headers from "./Headers"
import Panels from "./Panels"
import Buttons from "./Buttons"
import Tables from "./Tables"
import Statistics from "./Statistics"
import Progress from "./Progress"
import Search from "./Search"
import Forms from "./Forms"
import Modals from "./Modals"

export default function App(): React.ReactElement {
  return (
    <>
      <Container centered maxWidth={1200}>
        <Search/>
        <Menus />
        <Headers />
        <Buttons />
        <Panels />
        <Tables />
        <Statistics />
        <Progress />
        <Forms />
        <Modals />
      </Container>
      <div style={{padding: 100}}></div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))