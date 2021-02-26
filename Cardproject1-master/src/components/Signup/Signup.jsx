import React, { Component } from "react";
import { Link } from "react-router-dom";
import { store } from "Reducer/Reducer.js";
import { loadavg } from "os";
// import {connect} from "react-redux";


class Signup extends Component {
  state = {
    signupUsername: "",
    signupEmail: "",
    signupPassword: "",
    signupRepassword: "",
    signupPhone: "",
    message: "",
  };

  Entersignupinfo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateEmail = emailField => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) {
      let { signupEmail } = this.state;
      this.setState({ message: "Wrong Email" });
      return false;
    }

    return true;
  };
  Submitinfo = e => {
    e.preventDefault();
  
    let found = false;
    let Enteredinfo = this.state;
    console.log("Entered Information is:", Enteredinfo);
    let { signupUsername } = this.state;
    let { signupPassword } = this.state;
    let { signupRepassword } = this.state;
    let { signupEmail } = this.state;
    let signupdata={
      signupUsername:signupUsername,
      signupEmail: signupEmail,
      signupPassword: signupPassword,
      signupRepassword: signupRepassword,
      signupPhone: this.state.signupPhone,
      Cardinfo: []
    }
    ////Checking for Registered User..


    let usersfromlocalstorage = JSON.parse(localStorage.getItem("Data"));

    if (this.validateEmail(signupEmail)) {
      if (!signupUsername.trim().length) {
        this.setState({ message: "Please Enter Username" });
        return 0;
      }
      if (!signupPassword.trim().length) {
        return this.setState({ message: "Enter Password" });
      }
      if (!(signupPassword.trim() == signupRepassword.trim())) {
        return this.setState({ message: "Password did'nt match" });
      }
      if (usersfromlocalstorage != null) {
        usersfromlocalstorage.map((user, index) => {
          if (signupEmail === user.signupEmail) {
            this.setState({ message: "User Exist" });
            found = true;
          }
        });
      }
      if (found === false) {
        store.dispatch({ type: "AddData", payload: signupdata });
        this.props.history.push("/");
      }
    }
  };

  componentWillMount() {
    store.dispatch({ type: "dispatchalldata", payload: {} });
  }
  render() {
    return (
      <div className="BackgroundColor">
        <div className="materialContainer">
          <div className="box">
            <div className="title">SignUp</div>
            <form onSubmit={this.Submitinfo}>
              <div className="input">
                Username
                <input
                  type="text"
                  name="signupUsername"
                  placeholder=" Enter Username..."
                  onChange={this.Entersignupinfo}
                />
              </div>
              <div className="input">
                E-mail
                <input
                  // style={this.state.style}
                  type="email"
                  name="signupEmail"
                  placeholder="Enter E-mail"
                  onChange={this.Entersignupinfo}
                />
              </div>
              <div className="input">
                Password
                <input
                  type="password"
                  name="signupPassword"
                  placeholder=" Enter Password..."
                  onChange={this.Entersignupinfo}
                  minLength="10"
                />
              </div>
              <div className="input">
                Re-Enter Password
                <input
                  type="password"
                  name="signupRepassword"
                  placeholder=" Enter Re-enter Password..."
                  onChange={this.Entersignupinfo}
                  minLength="10"
                />
              </div>
              <div className="input">
                Phone no.
                <input
                  type="text"
                  name="signupPhone"
                  placeholder=" Enter Phone No."
                  onChange={this.Entersignupinfo}
                />
              </div>
              <p className="input" style={{ color: "red"}}>{this.state.message}</p>
              <div className="button login">
                <button type="submit">
                  <span>Register</span> <i className="fa fa-check" />
                </button>
              </div>
              <Link to="/">
                <div className="button register">
                  <button>
                    <span>Already Have Account</span>{" "}
                    <i className="fa fa-check" />
                  </button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
