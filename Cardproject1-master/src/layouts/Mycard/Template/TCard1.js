import React, { Component } from "react";
class Card1 extends Component {
  render() {
    console.log("hey calsadda11=>", this.props.User);
    const { User } = this.props;
    return (
      <div className=" c_01">
        <div className="card_Banner">
          <div className="card_Avatar" />
        </div>
        <h3>{User.name}</h3>
        <p>📧 {User.email}</p>
        <p>📱 {User.phone}</p>
        <p>Website : {User.website}</p>
        <p> Address: {User.address}</p>
      </div>
    );
  }
}

export default Card1;
