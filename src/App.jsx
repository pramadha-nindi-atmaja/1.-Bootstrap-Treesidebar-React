import { Col, Row, Container } from "react-bootstrap";
import "./App.css";
import NavbarComponents from "./components/NavbarComponents";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <NavbarComponents />
      <Container fluid>
        <Row>
          <Col xl={2} lg={3} className="sidebar-container border-sm mt-1">
            <Sidebar />
          </Col>
          <Col xl={10} lg={9} className="content-container border-sm ps-1 mt-1">
            <Row className="bg-body-tertiary p-2">
              <Col>
                <h4>Content</h4>
              </Col>
            </Row>
            <Row className="p-3">
              <Col>
                {/* Main content goes here */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;