import React, { Component } from 'react'
import {Nav,Navbar,Button,Modal} from 'react-bootstrap';
import Logo from '../../assets/logo.svg';


class Banner extends Component {
    
    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
    
        this.setState({ showHide: !this.state.showHide })
    }
    render() {
        
        return (
         <div>
         <Navbar expand='lg' bg="danger" variant="dark" style={{ marginTop: "0px",minHeight:"100px" }} >
             <Navbar.Brand href="#">
             <img
        src={Logo}
        width="30px"
        height="30px"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />

             </Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#" className="h5 text-light">| AppName</Nav.Link>     
                </Nav>
                <Nav>
                <Nav.Link href="/login" className="text-light">Logout  (vsathiya)</Nav.Link>
                <Nav.Link className="text-light" eventKey={2}  onClick={() => this.handleModalShowHide()}>
                    Login History
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
                        
  
          </Navbar>

           <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()} className="bg-danger">
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                     </Modal.Footer>
                </Modal>
                </div>
        )
    }
}
export default Banner;