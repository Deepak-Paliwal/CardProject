import React, { Component } from "react";

class Card2 extends Component {
  render() {
    return (
      <div className="card2body">
        <div
          className="card2"
          style={{ backgroundColor: "white", border: "3px solid" }}
        >
          <img
            src={require(`./images/abc.png`)}
            alt="John"
            style={{ width: "35%" }}
          />
          <h3>John Doe</h3>
          <p className="titlecard2">CEO &amp; Founder, Example</p>
          <p className="card2para">📱 +917404702998</p>
          <p className="card2para">📧 kaushikprashant68@gmail.com</p>
          <p className="card2para">
            <img src="https://png.icons8.com/small/32/1D1C1C/globe.png" />
            ABC.COM
          </p>
        </div>
      </div>
    );
  }
}

export default Card2;
