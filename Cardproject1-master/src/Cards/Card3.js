import React from "react";

class Card3 extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          display: "inline-block",
          width: "416px",
          height: "300px",
          marginLeft: "2%"
        }}
      >
        <div
          style={{
            border: "1px solid black",
            height: "23%"
          }}
        >
          <img
            src="https://png.icons8.com/carbon-copy/24/1D1C1C/iphone.png"
            style={{ marginBottom: "5px", display: "inline-block" }}
          />
          <p style={{ display: "inline-block" }}>7404702998</p>
          <p style={{ float: "right", display: "inline-block" }}>
            Prashant Kaushik
          </p>
        </div>
        <div style={{ border: "1px solid black", height: "53%" }}>
          <img
            src="https://png.icons8.com/ios/30/1D1C1C/address.png"
            style={{ margin: "4%" }}
          />
          <p>#H.No 143,Sector-13,Karnal(Haryana)</p>
        </div>
        <div
          style={{
            border: "1px solid black",
            height: "24%"
          }}
        >
          <p style={{ display: "inline-block" }}>
            <img src="https://png.icons8.com/ios/30/1D1C1C/new-post.png" />
            &nbsp;&nbsp;Kaushikprashant68@gmail.com
          </p>
          <p>
            <img
              src="https://png.icons8.com/plasticine/50/1D1C1C/domain.png"
              style={{}}
            />
            xyz.com
          </p>
        </div>
      </div>
    );
  }
}

export default Card3;
