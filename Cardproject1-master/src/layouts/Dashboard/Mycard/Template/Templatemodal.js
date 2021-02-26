import React, { Component } from "react";
import Cards from "./Mycardtemplatecard.js";

class Templatemodal extends Component {
  render() {
    return (
      <div
        style={{
          margin: "5em",
          marginLeft: "0em",
          height: "50em",
          width: "80em",
          boxShadow: "0 15px 16px rgba(0,0,0,0.2)",
          marginTop: "4em"
        }}
      >
        <Cards Templatecard={this.props.Templatecard} User={this.props.User} />
      </div>
    );
  }
}

export default Templatemodal;
