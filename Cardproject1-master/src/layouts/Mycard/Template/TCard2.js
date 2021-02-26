import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Card2 extends Component {
  state = {
    buttonhover: "0"
  };
  render() {
    const { User } = this.props;

    return (
      <div
        className="card2"
        style={{ border: "3px solid", backgroundColor: "white" }}
      >
        <img
          src={require(`./images/abc.png`)}
          alt="John"
          style={{ width: "35%" }}
        />
        <h3>{User.name}</h3>

        <p className="card2para">📱 +{User.phone}</p>
        <p className="card2para">📧 {User.email}</p>
        <p className="card2para">
          <img src="https://png.icons8.com/small/32/1D1C1C/globe.png" />
          {User.website}
        </p>
        <p className="card2para">📧 {User.address} </p>
        <div style={{ border: "8px solid", opacity: "0" }}>
          {/* <Button
            bsSize="small"
            style={{
              float: "right",
              display: "inline-block",
              marginTop: "-3em"
            }}
          >
            Add Cards
          </Button> */}
        </div>
      </div>
    );
  }
}

export default Card2;
