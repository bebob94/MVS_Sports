import React from "react";
import Carousel from "react-bootstrap/Carousel";
import calcetto from "../image/calcetto.webp";
import pallavolo from "../image/pallavolo-3 (1).jpg";
import tennisDoppio from "../image/tennis-627848.large.jpg";
import beachTennis from "../image/Beach-Tenis-Fest-Verao-2023-Credito-LEO-BORGES-17-600x400.jpg";
import beachVolley from "../image/beach-volley-min.jpg";
import paddle from "../image/MONDO-artificial-turf-systems-for-padel_HERO2_1920x1280.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

function Carosello() {
  return (
    <Row className="justify-content-center ">
      <Carousel prevIcon="" nextIcon="" indicators={false} className="my-5">
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
