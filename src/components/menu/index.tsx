import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {DropdownSubmenu, MenuItem, NavDropdownMenu} from "react-bootstrap-submenu";
import {Box} from "@mui/material";

function Menu(props: any) {
    return (
        <Box>
            <Navbar collapseOnSelect>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto bg-primary rounded-2">
                        <NavDropdownMenu title="Danh sách sản phẩm" id="collasible-nav-dropdown"
                                         className={`px-2 fw-bold`}>
                            <MenuItem>Action</MenuItem>
                            <DropdownSubmenu href="#action/3.7" title="Text to show">
                                <MenuItem>Sub 1</MenuItem>
                                <DropdownSubmenu href="#action/3.7" title="Text to show">
                                    <MenuItem>Sub 2</MenuItem>
                                </DropdownSubmenu>
                            </DropdownSubmenu>
                        </NavDropdownMenu>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Box>
    );
}

export default Menu;