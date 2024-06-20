import { useState } from "react";
import { Image } from "react-bootstrap";
import {
  Button,
  Col,
  Collapse,
  Container,
  Form,
  FormGroup,
  FormControl,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggle,
  Row,
} from "react-bootstrap";
import pjop from "../../public/assets/images/logos/logo-1.png";
import { Link } from "react-router-dom";
import contact from "../../public/assets/images/contact/contact44.png";

const Contact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container>
        <Navbar expand="lg" className="h1-nav">
          <NavbarBrand href="#">
            <img src={pjop} alt="pjop" className="custom-pjop" />
          </NavbarBrand>
          <NavLink as={Link} to="/" className="pj">
            <b className="pj">PJOP</b>
          </NavLink>

          <NavLink
            as={Link}
            to="/"
            className="pj"
            style={{ color: "green", padding: "30px" }}
          >
            <b className="pj" style={{ color: "green" }}>
              BUSINESS
            </b>
          </NavLink>

          <NavbarToggle onClick={() => setIsOpen(!isOpen)}>
            <span className="ti-menu"></span>
          </NavbarToggle>
          <Navbar id="header1">
            <Collapse in={isOpen}>
              <Nav className="ms-auto mt-2 mt-lg-0">
                <NavItem className="active">
                  <NavLink as={Link} to="/" style={{ color: "green" }}>
                    <b style={{ color: "green" }}>Home</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" style={{ color: "green" }}>
                    <b>About</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={Link} to="/courses" style={{ color: "green" }}>
                    <b style={{ color: "green" }}>Courses</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink as={Link} to="/contact" style={{ color: "green" }}>
                    <b style={{ color: "green" }}>Contact</b>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a className="btn btn-success text-black mt-0" href="#">
                    <b style={{ color: "black" }}>Call us</b>
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Navbar>
      </Container>
      <div className="spacer"></div>

      <div className="bg-light"></div>
      <div className="contact1">
        <Container>
          <Row>
            <Row className="m-0">
              <Col lg="8">
                <div className="contact-box p-r-40">
                  <h4 className="title">Quick Contact</h4>
                  <Form>
                    <Row>
                      <Col lg="6">
                        <FormGroup className="m-t-15">
                          <FormControl type="text" placeholder="name" />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup className="m-t-15">
                          <FormControl type="email" placeholder="email" />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <FormGroup className="m-t-15">
                          <FormControl
                            as="textarea"
                            name="text"
                            placeholder="message"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="12">
                        <Button
                          type="submit"
                          className="btn btn-success-gradiant m-t-20 btn-arrow"
                        >
                          <span>
                            SUBMIT <i className="ti-arrow-right"></i>
                          </span>
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
              <Col lg="4">
                <div className="contact">
                  <Image src={contact} fluid />
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
      <div className="footer4 b-t spacer" style={{ backgroundColor: "black" }}>
        <Container>
          <Row>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Address</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                71 Amsteroum Avenue Cronish Night, NY 35098
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Phone</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Reception : +205 123 4567 <br />
                Office : +207 235 7890
              </p>
            </Col>
            <Col lg="3" md="6" className="m-b-30">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Email</b>
              </h5>
              <p className="context" style={{ color: "white" }}>
                Office :{" "}
                <a
                  href="mailto:info@wrappixel.com"
                  className="link"
                  style={{ color: "white" }}
                >
                  info@wrappixel.com
                </a>{" "}
                <br />
                Site :{" "}
                <a
                  href="mailto:wrapkit@wrappixel.com"
                  className="link"
                  style={{ color: "white" }}
                >
                  wrapkit@wrappixel.com
                </a>
              </p>
            </Col>
            <Col lg="3" md="6">
              <h5 className="m-b-20" style={{ color: "#20c997" }}>
                <b>Social</b>
              </h5>
              <div className="round-social light">
                <a href="#" className="link">
                  <i className="fa fa-facebook" style={{ color: "blue" }}></i>
                </a>
                <a href="#" className="link">
                  <i className="fa fa-twitter" style={{ color: "#1DA1F2" }}></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-google-plus"
                    style={{ color: "darkred" }}
                  ></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-youtube-play"
                    style={{ color: "red" }}
                  ></i>
                </a>
                <a href="#" className="link">
                  <i
                    className="fa fa-instagram"
                    style={{ color: "#C13584" }}
                  ></i>
                </a>
              </div>
            </Col>
          </Row>
          <div className="f4-bottom-bar">
            <Row>
              <Col md="12">
                <div className="d-flex font-14 justify-content-between">
                  <div
                    className="m-t-10 m-b-10 copyright"
                    style={{ color: "white" }}
                  >
                    All Rights Reserved by pjoptechnologies.
                  </div>
                  <div className="links ms-auto m-t-10 m-b-10">
                    <a
                      href="#"
                      className="p-10 p-l-0"
                      style={{ color: "white" }}
                    >
                      Terms of Use
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Legal Disclaimer
                    </a>
                    <a href="#" className="p-10" style={{ color: "white" }}>
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
