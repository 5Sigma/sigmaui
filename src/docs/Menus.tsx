import React from "react"
import { Menu, Panel, Header, ColumnMenu } from "../index"
import { faCalendar, faUser, faUsers } from "@fortawesome/pro-solid-svg-icons"

export default function () {

  return (
    <>
      <Header dividing size="large">
        Menus
      </Header>
      <Header>Column Menu</Header>
      <ColumnMenu>
        <ColumnMenu.Column header="Customers">
          <ColumnMenu.Item label="New Customers" />
          <ColumnMenu.Item label="View Customers" />
          <ColumnMenu.Item label="Customer Reports" />
        </ColumnMenu.Column>
        <ColumnMenu.Column header="Account">
          <ColumnMenu.Item label="Edit Profile" />
          <ColumnMenu.Item label="Change Password" />
          <ColumnMenu.Item label="Update Billing" />
        </ColumnMenu.Column>
      </ColumnMenu>
      <Header>Popver items</Header>
      <Menu>
        <Menu.Popover icon={faUsers}>
          <>
            <Header top icon={faUser}>
              Customers
              <Header.SubHeader>Track and manage customers</Header.SubHeader>
            </Header>
            <ColumnMenu>
              <ColumnMenu.Column header="View Customers">
                <ColumnMenu.Item label="Frequent Customers" />
                <ColumnMenu.Item label="New Customers" />
                <ColumnMenu.Item label="Pending Customers" />
              </ColumnMenu.Column>
              <ColumnMenu.Column header="Anayltics">
                <ColumnMenu.Item label="General Statistics" />
                <ColumnMenu.Item label="Customer Aquisition" />
                <ColumnMenu.Item label="Bounce Rates" />
                <ColumnMenu.Item label="Breakdown" />
              </ColumnMenu.Column>
            </ColumnMenu>
          </>
        </Menu.Popover>
        <Menu.Popover icon={faCalendar}>
          <>
            <Header top icon={faUser}>
              Appointments
              <Header.SubHeader>Appointments and services</Header.SubHeader>
            </Header>
            <ColumnMenu>
              <ColumnMenu.Column header="All Appointments">
                <ColumnMenu.Item label="Todays Appointments" />
              </ColumnMenu.Column>
              <ColumnMenu.Column header="Analytics">
                <ColumnMenu.Item label="General Statistics" />
                <ColumnMenu.Item label="Sales Analytics" />
                <ColumnMenu.Item label="Service Breakdown" />
              </ColumnMenu.Column>
            </ColumnMenu>
          </>
        </Menu.Popover>
      </Menu>
      <Header>Dropdown menus</Header>
      <Menu>
        <Menu.Dropdown label="Dropdown" icon={faUser}>
          <Menu.DropDownItem icon={faUser} label="Account Profile" />
          <Menu.DropDownItem label="Billing" />
          <Menu.DropDownItem label="Settings" />
          <Menu.DropDownItem label="Logout" />
        </Menu.Dropdown>
      </Menu>
    </>
  )
}