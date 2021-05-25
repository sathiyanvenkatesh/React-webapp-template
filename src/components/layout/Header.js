import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";



const navitems = [
  {link: '/', title: 'Home',isdropdown:'N'},
  {link: '/formexample', title: 'FormExample',isdropdown:'N'},
  {link:'#',title:'FormComponentExamle',isdropdown:'Y',menuItems: [
    {
      title: 'FormLink',
      link:'/formLink',
      isdropdown:'N'

    },
    {
      title: 'SimpleForm',
      link:'/formexample',
      isdropdown:'N'

    },
    {
      title: 'RegistrationFormUsingFormLink',
      link:'/registrationFormlnk',
      isdropdown:'N'

    }
  ]},
  {link:'#',title:'DataTableComponentExample',isdropdown:'Y',menuItems: [
    {
      title: 'BasicDatatable',
      link:'/basicDataTable',
      isdropdown:'N'

    },
    {
      title: 'AdvancedDataTable',
      link:'/advancedDataTable',
      isdropdown:'N'

    }
  ]},
 /* {link:'#',title:'DropDownSubMenu',isdropdown:'Y',issubmenu:'Y',menuItems: [
    {
      title: 'Sub Menu test1',
      link:'/subMenuitemactiontest1',  
      isdropdown:'Y'  ,  
      menuItems:[{
        title:'submenu1',
        link:'/submenu1'
      }
      ]

    },
    {
      title: 'Sub Menu test 2',
      link:'/submenuiteamactiontest2',
      isdropdown:'Y',
      menuItems:[{
        title:'submenu2',
        link:'/submenu2'
      }
      ]



    }
  ]},*/
  {link: '/recipes', title: 'API Call example',isdropdown:'N'},

  {link: '/menu', title: 'Nested Menu',isdropdown:'N'},
  {link:'#',title:'SVC Module',isdropdown:'Y',menuItems: [
    {
      title: 'Serarch SVC',
      link:'/svcsearch',
      isdropdown:'N'

    },
    {
      title: 'Create New SVC',
      link:'/createsvc',
      isdropdown:'N'

    },
    {
      title: 'Update SVC',
      link:'/updatesvc',
      isdropdown:'N'

    }
  ]},
];



class Header extends Component {
  
  constructor(props){
    super(props);
    this.getNavDropdownItem=this.getNavDropdownItem.bind(this);
   }

   getNavDropdownItem=(navemenuitem)=>{
    console.log(navemenuitem);
    
  return null;
  
  }

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
 // console.log(menuItem)
            if (menuItem.menuItems !== undefined && menuItem.issubmenu === 'Y' && menuItem.isdropdown ==='Y') {
                var submenuList=[];
                return (                  
                  <NavDropdownMenu    title={menuItem.title}  id="collasible-nav-dropdown"  alignRight key={i}  >{/* root lablee */}
                   { menuItem.menuItems.map(function(mitem,i){  
                     console.log(mitem);
                      mitem.menuItems.map(function(item,i){
                        console.log("data"+JSON.stringify(item));
                         submenuList.push(item);
                         console.log(submenuList);  
                          if(submenuList.length >0){  
                            console.log("inside !=undefined")                
                    return <DropdownSubmenu href={mitem.link} key={i}>{mitem.title}                                                               
                               <NavDropdown.Item href="/action/9.1" key ={i}>   Sub 2  </NavDropdown.Item>                              
                               </DropdownSubmenu>
                               
                            
                            
                                       
                  }
                  else{
                    return(
                      <NavDropdown.Item href={mitem.link} key={i}>{mitem.title}</NavDropdown.Item>   
                      ); 
                    
                  }
                })
               
               
                   //"";//this.getNavDropdownItem(mitem);
                   return ""; //<NavDropdown.Item href={mitem.link} key={i}>{mitem.title}</NavDropdown.Item>
                    } )}
                    </NavDropdownMenu>
                
  
                );
            } else {
                return undefined;
                
            }
        })}











{/*
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
               </NavDropdownMenu> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
