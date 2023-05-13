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

function Carosello() {
  return (
    <Carousel prevIcon="" nextIcon="" indicators={false}>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100 h-75 rounded-4"
          src={calcetto}
          alt="Calcetto"
        />
        <Carousel.Caption>
          <h3>Calcetto</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100 h-75 rounded-4"
          src={pallavolo}
          alt="Pallavolo"
        />
        <Carousel.Caption>
          <h3>Pallavolo</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100 h-75 rounded-4"
          src={tennisSingolo}
          alt="Tennis singolo"
        />
        <Carousel.Caption>
          <h3>Tennis singolo </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100 h-75 rounded-4"
          src={tennisDoppio}
          alt="Tennis doppio"
        />
        <Carousel.Caption>
          <h3>Tennis doppio</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100 h-75 rounded-4"
          src={beachTennis}
          alt="Beach tennis"
        />
        <Carousel.Caption>
          <h3>Beach tennis</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100 h-75 rounded-4"
          src={beachVolley}
          alt="Beach volley"
        />
        <Carousel.Caption>
          <h3>Beach volley</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="myCarousel">
        <img
          className="d-block w-100 h-75 rounded-4"
          src={paddle}
          alt="Paddle"
        />
        <Carousel.Caption>
          <h3>Paddle</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosello;
