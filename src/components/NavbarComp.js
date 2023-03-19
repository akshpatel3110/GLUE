import React, { Component } from 'react';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';


class navbarcomp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="/" style={{ fontSize: 30 }}>&nbsp; 📊GLUE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="https://openreview.net/pdf?id=rJ4km2R5t7" style={{ fontSize: 20 }}><b>📝Paper</b></Nav.Link>
            <Nav.Link href="https://github.com/nyu-mll/GLUE-baselines" style={{ fontSize: 20 }}><b>👨‍💻Code</b></Nav.Link>
            <Nav.Link href="/Tasks" style={{ fontSize: 20 }}><b>🧠Tasks</b></Nav.Link>
            
            <NavDropdown title=<b>More</b> id="basic-nav-dropdown" style={{ fontSize: 20 }}>
              <NavDropdown.Item href="/Leaderboard" style={{ fontSize: 20 }}>
              🏆Leaderboard
              </NavDropdown.Item>
              <NavDropdown.Item href="/FAQ" style={{ fontSize: 20 }}>🙋FAQ</NavDropdown.Item>
              <NavDropdown.Item href="/Diagnostics" style={{ fontSize: 20 }}>
              🩺Diagnostics
              </NavDropdown.Item>
              <NavDropdown.Item href="https://groups.google.com/g/glue-benchmark-discuss" style={{ fontSize: 20 }}>🗣️Group</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/Submit" style={{ fontSize: 20 }}><b>✔️Submit</b></Nav.Link>&nbsp;&nbsp;
          </Nav>
        </Navbar.Collapse>
    </Navbar>
            </div>
        );
    }
}

export default navbarcomp;