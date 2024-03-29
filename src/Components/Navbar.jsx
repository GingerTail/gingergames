import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import banner from "./bannerFlag.png"
import "../stylesheets/navbar.css";
import {
  BrowserRouter as Router, Link
} from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logged: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar id="custom-nav" className="fixed-top" expand="md">
          <NavbarBrand href="/">
            <img className="mt-5 bannerFlag" src={banner} width="78px"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-5" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  STORE
                </DropdownToggle>
                <DropdownMenu right className="navlink-search animated fadeIn faster">
                  <DropdownItem>
                  <NavLink href={"/category/Action"}>Action</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={"/category/Adventure"}>Adventure</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={"/category/RPG"}>RPG</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={"/category/Strategy"}>Strategy</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink href={"/category/Indie"}>Indie</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SUPPORT
                </DropdownToggle>
                <DropdownMenu right className="animated fadeIn faster">
                  <DropdownItem>
                    Game Issues
                  </DropdownItem>
                  <DropdownItem>
                    Payments - Orders
                  </DropdownItem>
                  <DropdownItem>
                    Account
                  </DropdownItem>
                  <DropdownItem>
                   Downloads
                  </DropdownItem>
                  <DropdownItem>
                    Other
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://github.com/GingerTail/gingergames">GitHub</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Log-in/SignUp</NavLink>
              </NavItem>
              <NavItem>
                {this.state.logged ?   <NavLink href="https://github.com/reactstrap/reactstrap">Cart</NavLink> : ""}
              
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}