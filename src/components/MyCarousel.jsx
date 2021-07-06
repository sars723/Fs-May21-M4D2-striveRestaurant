import React from "react";
import items from "../data/menu.json";
import { Carousel } from "react-bootstrap";
import { Component } from "react";
import Comments from "./Comments";
class MyCarousel extends Component {
  state = {
    selected: null,
  };
  render() {
    return (
      <>
        <Carousel>
          {items.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                className="d-block w-100"
                src={item.image}
                alt={item.name}
                onClick={() => {
                  this.setState({ selected: item });
                }}
              />
              <Carousel.Caption>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {this.state.selected && <Comments dish={this.state.selected} />}
      </>
    );
  }
}

export default MyCarousel;
