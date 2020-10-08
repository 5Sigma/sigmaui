import { faUser } from "@fortawesome/pro-light-svg-icons"
import React from "react"
import { Header, Search, Panel, Icon } from "../index"

export default function Searches () {
  return (
    <>
      <Header>Search</Header>
      <Panel>
        <Search 
          renderItem={(d) => (
            <Search.Item title={d.name} icon={faUser} key={d.id} />
          )}
          getResults={() => [{id: 1, name: "Alice Allison"}, {id: 2, name: "Bob Bobberson"}]} />
      </Panel>
    </>
  )
}