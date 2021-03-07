import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

//import styled from  'styled-components';

/*const Styles = styled.div`
.navbar{
    background-color: red;   
}
.navbar-brand,.navbar-nav .nav-link{
    color: black;
    &:hover{
        color : white;
    }
}
`;*/

const navitems = [
  {link: '/', title: 'Home',isdropdown:'N'},
  {link: '/formexample', title: 'FormExample',isdropdown:'N'},
  {link:'#',title:'DropdownExampleTest',isdropdown:'Y',menuItems: [
    {
      title: 'Sub Menu 1',
      link:'/subMenuitemaction1',
      isdropdown:'N'

    },
    {
      title: 'Sub Menu 2',
      link:'/submenuiteamaction2',
      isdropdown:'N'

    }
  ]},
  {link:'#',title:'DropdownExampleTest1',isdropdown:'Y',menuItems: [
    {
      title: 'Sub Menu test1',
      link:'/subMenuitemactiontest1',
      isdropdown:'N'

    },
    {
      title: 'Sub Menu test 2',
      link:'/submenuiteamactiontest2',
      isdropdown:'N'

    }
  ]},
  {link:'#',title:'DropDownSubMenu',isdropdown:'Y',issubmenu:'Y',menuItems: [
    {
      title: 'Sub Menu test1',
      link:'/subMenuitemactiontest1',
      isdropdown:'N'

    },
    {
      title: 'Sub Menu test 2',
      link:'/submenuiteamactiontest2',
      isdropdown:'N'

    }
  ]}
  
];

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          expand="lg"
          variant="dark"
          className="bg-dark"
          style={{ marginTop: "0px" }}
        >
          <Navbar.Brand href="/"> Web App Template </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              
            {navitems.map(item=>{
               if(item.isdropdown==='N'){
               return <Nav.Item key={navitems.indexOf(item)}> <Nav.Link  key={navitems.indexOf(item)} href={item.link} className="test-light">{item.title}</Nav.Link>  </Nav.Item>
               }else return "";
             
             }) }  
            {navitems.map(function(menuItem, i) {
            if (menuItem.menuItems !== undefined && menuItem.issubmenu === undefined) {
                return (                  
                    <NavDropdown title={menuItem.title} id="basic-nav-dropdown" key={i} >
                    {menuItem.menuItems.map((subitem,j)=>{
                      
                      return   <NavDropdown.Item href={subitem.link} key={j} className="bg-danger text-light">{subitem.title}</NavDropdown.Item>
                     })}
                    </NavDropdown> 
                );
            } else {
                return undefined;
            }
        })}

{navitems.map(function(menuItem, i) {
            if (menuItem.menuItems !== undefined && menuItem.issubmenu !== undefined) {
                return (                  
                  <NavDropdownMenu    title={menuItem.title}  id="collasible-nav-dropdown"  alignRight key={i}  >
                   { menuItem.menuItems.map((mitem,i)=>{                     
                    return  <> <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
                    <DropdownSubmenu href="/action/3.7" title="Text to show">
                      <NavDropdown.Item href="/action/8.1">Sub 1</NavDropdown.Item>
                      <DropdownSubmenu href="/action/3.7" title="Text to show">
                        <NavDropdown.Item href="/action/9.1">
                          Sub 2
                        </NavDropdown.Item>
                      </DropdownSubmenu>
                    </DropdownSubmenu></>
                    })}
                    </NavDropdownMenu>
                
  
                );
            } else {
                return undefined;
            }
        })}












              <NavDropdownMenu
                title="Nested Dropdown RIght"
                id="collasible-nav-dropdown"
                alignRight
              >
                <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
                <DropdownSubmenu href="/action/3.7" title="Text to show">
                  <NavDropdown.Item href="/action/8.1">Sub 1</NavDropdown.Item>
                  <DropdownSubmenu href="/action/3.7" title="Text to show">
                    <NavDropdown.Item href="/action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                </DropdownSubmenu>
              </NavDropdownMenu>

              <NavDropdownMenu
                title="Nested Dropdown Left"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
                <DropdownSubmenu href="/action/3.7" title="Text to show">
                  <NavDropdown.Item href="/action/8.1">Sub 1</NavDropdown.Item>
                  <DropdownSubmenu href="/action/3.7" title="Text to show">
                    <NavDropdown.Item href="/action/9.1">
                      Sub 2
                    </NavDropdown.Item>
                  </DropdownSubmenu>
                </DropdownSubmenu>
              </NavDropdownMenu>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
