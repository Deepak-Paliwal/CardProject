import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Card1 extends Component {
  state = {
    buttonhover: "0"
  };

  opacitychange = () => {
    if (this.state.buttonhover === "0") this.setState({ buttonhover: "1" });
    else this.setState({ buttonhover: "0" });
  };

  render() {
    // console.log("Props Coming is:", this.props);
    const { User, index, editModal } = this.props;
    return (
      <div
        className=" c_01"
        onMouseOver={this.opacitychange}
        onMouseOut={this.opacitychange}
      >
        <div className="card_Banner">
          <div className="card_Avatar" />
        </div>
        <h3>{User.name}</h3>
        <p>📧 {User.email}</p>
        <p>📱 {User.phone}</p>
        <p>Website : {User.website}</p>
        <p> Address: {User.address}</p>
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

export default Card1;
