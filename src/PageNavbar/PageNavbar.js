import React, { useState } from 'react';
import './PageNavbar.css';
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
    DropdownItem,
    NavbarText
} from 'reactstrap';

const PageNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className="navbarBrand" href="/">tanzeel.mirza</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">
                                <i className="fa fa-tasks fa-1x"></i>&nbsp;Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/tmtanzeel">
                                <i className="fa fa-github fa-1x"></i>&nbsp;GitHub
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://stackoverflow.com/users/11163977/tanzeel">
                                <i className="fa fa-stack-overflow fa-1x"></i>&nbsp;Stack overflow
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Social network
                            </DropdownToggle>
                            <DropdownMenu right>
                                <NavLink href="https://www.linkedin.com/in/tanzeel-mirza-9b784b168/" target="_blank">
                                    <DropdownItem>
                                        <i className="fa fa-linkedin fa-1x"></i>&nbsp;LinkedIn
                                    </DropdownItem>
                                </NavLink>
                                <NavLink href="https://www.facebook.com/tanzeel.mirza.9/" target="_blank">
                                    <DropdownItem>
                                        <i className="fa fa-facebook fa-1x"></i>&nbsp;Facebook
                                    </DropdownItem>
                                </NavLink>
                                <NavLink href="https://www.youtube.com/channel/UCOYqNBjmWF8j-PzI7ZPjt_w" target="_blank">
                                    <DropdownItem>
                                        <i className="fa fa-youtube fa-1x"></i>&nbsp;YouTube channel
                                    </DropdownItem>
                                </NavLink>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    {/* <NavbarText>Right corner Text</NavbarText> */}
                </Collapse>
            </Navbar>
        </div>
    );
}

export default PageNavbar;
