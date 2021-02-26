import React, { Component } from "react";
import { userInfo } from "os";
import { Button } from "react-bootstrap";

class Card2 extends Component {
  state = {
    buttonhover: "0"
  };

  opacitychange = () => {
    if (this.state.buttonhover === "0") this.setState({ buttonhover: "1" });
    else this.setState({ buttonhover: "0" });
  };

  render() {
    const { User } = this.props;

    return (
      <div
        className="card2"
        style={{ border: "3px solid", backgroundColor: "white" }}
        onMouseOver={this.opacitychange}
        onMouseOut={this.opacitychange}
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
        <div style={{ opacity: `${this.state.buttonhover}` }}>
          <Button
            bsSize="medium"
            style={{
              float: "right",
              display: "inline-block",
              marginTop: "-3em"
            }}
            onClick={() => {
              this.props.editModal(this.props.index);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}

export default Card2;
