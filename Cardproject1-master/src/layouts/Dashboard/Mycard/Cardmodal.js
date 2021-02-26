import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Dropzone from "react-dropzone";

// const styles = theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   input: {
//     margin: theme.spacing.unit
//   }
// });

class Modalopen extends Component {
  state = {
    user: {
      name: "",
      phone: "",
      email: "",
      website: "",
      address: "",
      template: false,
      cardtype: ""
    },
    userImage: {
      preview: "/imgs/common/add_author.png"
    },
    error: {},
    isValid: false
  };

  Enterinfo = (key, value) => {
    // console.log("This state", key, value);
    let { user, error } = this.state;
    user = { ...user, [key]: value };
    error = { ...error, [key]: "" };
    this.setState({ user, error });
  };

  Senddata = () => {
    let { name, phone, email, website, address } = this.state.user;
    let { user } = this.state;
    let { error, isValid } = this.isValid(user);
    // console.log("Error coming is:", error, this.state.userImage);
    this.setState({ error });
    if (!isValid) {
      let data = {
        name: name,
        phone: phone,
        email: email,
        website: website,
        address: address,
        cardtype: ""
      };
      // console.log("Data going is", data);
      // localStorage.setItem("Modaldata", JSON.stringify(data));
      this.props.Saveandclosemodal(data);
    }
  };

  editCard = () => {
    let { name, phone, email, website, address } = this.state.user;
    let { user, isValid } = this.state;
    // let { error, isValid } = this.isValid(user);
    // console.log("Error coming is:", error, this.state.userImage);
    // this.setState({ error });
    if (!isValid) {
      let data = {
        name: name,
        phone: phone,
        email: email,
        website: website,
        address: address
      };
      console.log("Data going is", data);
      // localStorage.setItem("Modaldata", JSON.stringify(data));
      this.props.editAndCloseData(data);
    }
  };

  isValid = user => {
    let error = {};
    let valid = false;
    if (user && !user.email) {
      valid = true;
      error.email = " Enter Email";
    }
    if (user && !user.phone) {
      valid = true;
      error.phone = "Enter Phone Number ";
    }
    if (user && !user.website) {
      valid = true;
      error.website = "Enter Website";
    }
    if (user && !user.name) {
      valid = true;
      error.name = "Enter Name";
    }
    if (user && !user.address) {
      valid = true;
      error.address = "Enter Address";
    }
    return { error, isValid: valid };
  };

  onDrop = files => {
    console.log(files, "files");
    this.setState({
      userImage: files[0]
    });
  };

  openUploader = () => {
    this.refs.imageUploader.open();
  };

  render() {
    let { name, phone, email, website, address, cardtype } = this.state.user;
    let { error } = this.state;
    // console.log("Target", this.state.error);
    return (
      <div style={{ marginTop: "1300px", paddingTop: "400px" }}>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Add Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="input">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={e => this.Enterinfo(e.target.name, e.target.value)}
                  minLength="6"
                  value={name}
                />
                {error && <p style={{ color: "red" }}>{error.name}</p>}
              </div>
              <div className="input">
                Phone
                <input
                  // style={this.state.style}
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  onChange={e => this.Enterinfo(e.target.name, e.target.value)}
                  value={phone}
                />
                {error && <p style={{ color: "red" }}>{error.phone}</p>}
              </div>
              <div className="input">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder=" Enter Email..."
                  onChange={e => this.Enterinfo(e.target.name, e.target.value)}
                  value={email}
                />
                {error && <p style={{ color: "red" }}>{error.email}</p>}
              </div>
              <div className="input">
                Address
                <input
                  name="address"
                  placeholder=" Enter Email..."
                  onChange={e => this.Enterinfo(e.target.name, e.target.value)}
                  value={address}
                />
                {error && <p style={{ color: "red" }}>{error.address}</p>}
              </div>
              <div className="input">
                Website
                <input
                  type="text"
                  name="website"
                  placeholder=" Enter Website..."
                  onChange={e => this.Enterinfo(e.target.name, e.target.value)}
                  value={website}
                />
                {error && <p style={{ color: "red" }}>{error.website}</p>}
              </div>
              <br />
            </form>
          </Modal.Body>

          <Modal.Footer>
            <div
              className="text-center image_author"
              style={{
                border: "1px solid",
                marginTop: "90%",
                borderStyle: "dotted"
              }}
            >
              <Dropzone
                className="dropzone_profileimage"
                ref="imageUploader"
                multiple={false}
                onDrop={this.onDrop}
              >
                <img
                  src={this.state.userImage && this.state.userImage.preview}
                  style={{ height: "9%" }}
                />
                <h6>Tap to add profile pic</h6>
              </Dropzone>
            </div>
            <p>.</p>
            <p />
            <p />
            <Button
              bsStyle="primary"
              onClick={this.Senddata}
              disabled={this.props.buttonable}
            >
              Save
            </Button>
            <Button onClick={this.props.Closemodal}>Close</Button>

            <Button
              bsStyle="primary"
              onClick={this.editCard}
              disabled={this.props.savechangeopacity}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default Modalopen;
