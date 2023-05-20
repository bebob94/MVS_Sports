import React from "react";
import Carousel from "react-bootstrap/Carousel";
import calcetto from "../image/calcetto-calcio-a-5.jpg";
import pallavolo from "../image/pallavolo-3.jpg";
import tennisSingolo from "../image/tennis singolo.jpg";
import tennisDoppio from "../image/tennis-doppio.jpg";
import beachTennis from "../image/beach tennis.jpg";
import beachVolley from "../image/beach-volley-min.jpg";
import paddle from "../image/paddle.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

function Carosello() {
  return (
    <Row className="justify-content-center ">
      <Carousel prevIcon="" nextIcon="" indicators={false} className="mb-5">
        <Carousel.Item>
          <img
            className="d-block mx-auto myCarousel rounded-4"
            src={calcetto}
            alt="Calcetto"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto myCarousel rounded-4"
            src={pallavolo}
            alt="Pallavolo"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block mx-auto myCarousel rounded-4"
            src={tennisDoppio}
            alt="Tennis doppio"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto myCarousel rounded-4"
            src={beachTennis}
            alt="Beach tennis"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto myCarousel rounded-4"
            src={beachVolley}
            alt="Beach volley"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto myCarousel rounded-4"
            src={paddle}
            alt="Paddle"
          />
        </Carousel.Item>
      </Carousel>
    </Row>
  );
}

export default Carosello;
