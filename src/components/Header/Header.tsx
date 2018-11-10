import * as React from 'react';
import {
  Collapse,
  Nav,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
} from 'reactstrap';

import * as MyNav from '../MyNav';
import { MyForm } from '../MyForm';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
    
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <MyNav.Bar expand="md">
        <MyNav.Brand href="/">UltimateLaundrySolutions</MyNav.Brand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <MyNav.Link href="">Components</MyNav.Link>
            </NavItem>
            <NavItem>
              <MyNav.Link href="https://github.com/reactstrap/reactstrap">GitHub</MyNav.Link>
            </NavItem>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
            <UncontrolledDropdown nav inNavbar>
              <MyNav.Dropdown nav caret>
                Login
              </MyNav.Dropdown>
              <DropdownMenu right>
                <MyForm />
              </DropdownMenu>
            </UncontrolledDropdown>
        </Collapse>
          </Nav>
      </MyNav.Bar>
    );
  }
  }