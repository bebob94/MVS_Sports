/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FaGem, FaHome, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer">
    <Container fluid className="text-center text-md-left">
      <Row className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <Col className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </Col>

        <Col>
          <Link className="MyLink" to={""}>
            <BsFacebook className="m-3" />
          </Link>
          <Link className="MyLink" to={""}>
            <BsTwitter className="m-3" />
          </Link>
          <Link className="MyLink" to={""}>
            <BsGoogle className="m-3" />
          </Link>
          <Link className="MyLink" to={""}>
            <BsInstagram className="m-3" />
          </Link>
          <Link
            className="MyLink"
            to={"https://www.linkedin.com/in/alberto-macis-052273153/"}
          >
            <BsLinkedin className="m-3" />
          </Link>
          <Link className="MyLink" to={"https://github.com/bebob94/MVS_Sports"}>
            <BsGithub className="m-3" />{" "}
          </Link>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <FaGem className="me-3" />
            M.V.S.sports
          </h6>
          <p>
            Siamo un'azienda che vi aiuterà nella ricerca dei vostri centri
            sportivi e vi aiuterà a prenotare in modo semplice e innovativo.
          </p>
        </Col>

        <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Products</h6>
          <p>
            <a href="#" className="text-reset">
              React
            </a>
          </p>
          <p>
            <a href="#" className="text-reset">
              Bootstrap
            </a>
          </p>
          <p>
            <a href="#" className="text-reset">
              Java
            </a>
          </p>
        </Col>

        <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>

          <p>
            <Link className="MyLink" to={"/AboutUs"}>
              About Us
            </Link>
          </p>
          <p>
            <Link className="MyLink" to={"/login"}>
              sign In
            </Link>
          </p>
          <p>
            <Link className="MyLink" to={"/register"}>
              sign Up
            </Link>
          </p>
        </Col>

        <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
            <FaHome className="me-2" />
            Muravera, SS 09043, IT
          </p>
          <p>
            <FaEnvelope className="me-3" />
            bebo.macis@gmail.com
          </p>
          <p>
            <FaPhone className="me-3" /> +39 3477028885
          </p>
        </Col>
      </Row>
    </Container>
    <div className="text-center py-3">
      © {new Date().getFullYear()} Copyright:
      <a href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>
  </footer>
);

export default Footer;
