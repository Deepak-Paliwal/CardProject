import React, { Component } from "react";
import Card1 from "./Card1.js";
import Card2 from "./Card2.js";
import Card3 from "./Card3.js";

class Cards extends Component {
  render() {
    return (
      <div className="Cardviews">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    );
  }
}

export default Cards;
