import React, { Component } from "react";
import { Button } from "react-bootstrap";
import TCard1 from "./TCard1.js";
import TCard2 from "./TCard2.js";
import TCard3 from "./TCard3.js";

class Cards extends Component {
  state = {
    cardtype: null
  };
  Inputrun = e => {
    this.setState({ cardtype: e.target.id });
  };

  submit = () => {
    this.props.Templatecard(this.state.cardtype);
  };
  render() {
    return (
      <div style={{ width: "100%", position: "relative" }}>
        <div
          className="Cardviews"
          style={{ height: "36em", overflowY: "scroll" }}
        >
          <div
            style={{
              width: "30%",
              margin: "20px",
              height: "55%"
              // border: "1px solid black"
            }}
          >
            <input
              type="radio"
              onClick={this.Inputrun}
              name="browser"
              id="TCard1"
            />

            <TCard1 User={this.props.User} />
          </div>
          <div
            style={{
              margin: "2%",
              height: "360px"
            }}
          >
            <input
              type="radio"
              name="browser"
              onClick={this.Inputrun}
              id="TCard2"
            />
            <TCard2 User={this.props.User} />
          </div>
          <div style={{ margin: "2%", height: "60%" }}>
            <input
              type="radio"
              name="browser"
              onClick={this.Inputrun}
              id="TCard3"
            />

            <TCard3 User={this.props.User} />
          </div>
        </div>
        <Button bsSize="large" style={{ float: "right" }} onClick={this.submit}>
          Submit
        </Button>
      </div>
    );
  }
}

export default Cards;
