'use client';
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import SignOut from 'src/components/SignOut';


export default function App() {
  return (
    <Navbar className="bg-success-500" >
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
     
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem isActive>
          <Link color="foreground" href="/">
           HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/profile" >
            PROFILE
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="/dashborad">
            DASHBORAD
          </Link>
        </NavbarItem>
      </NavbarContent>
     <NavbarContent  justify="end">
        
            <NavbarItem >
            <SignOut/> 
            </NavbarItem>
        </NavbarContent> 
        <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">user</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
