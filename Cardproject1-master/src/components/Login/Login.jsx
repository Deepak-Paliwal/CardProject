import React, { Component } from "react";
import { Link } from "react-router-dom";
import { store } from "Reducer/Reducer.js";

class Loginpage extends Component {
  state = {
    loginEmail: "",
    loginPassword: "",
    message: ""
  };

  loginInInfo = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  loggingprocess = e => {
    e.preventDefault();
    let { loginEmail } = this.state;
    let { loginPassword } = this.state;
    // console.log("The logging is running");
    let UserData = JSON.parse(localStorage.getItem("Data"));
    // console.log("UserData is",UserData);
    let totalpersoninstorage=0;
    if (UserData !== null) {
      UserData.map((data, index) => {
        totalpersoninstorage++;
        let { signupEmail } = data;
        let { signupPassword } = data;
        console.log(
          "Data is: and email is ",
          data.signupEmail,
          loginEmail,
          data.signupPassword,
          loginPassword
        );
        if (signupEmail == loginEmail) {
          if (signupPassword == loginPassword) {
            this.props.history.push("/dashboard");
            localStorage.setItem("Userlogged", this.state.loginEmail);
          }
           else
          this.setState({ message: "Wrong Password" });
        }else if(totalpersoninstorage ===  UserData.length){
          return  this.setState({message:"Email not Found"})
         }
      });
    } else {
      this.setState({ message: "Email Does not exist" });
    }
  };

  componentWillMount() {
    store.dispatch({
      type: "takeuserfromstorage",
      payload: JSON.parse(localStorage.getItem("Data"))
    });
    if (localStorage.getItem("Userlogged") !== null) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="BackgroundColor">
        <div className="materialContainer">
          <div className="box">
            <div className="title">LOGIN</div>
            <form>
              <div className="input">
                <input
                  type="email"
                  name="loginEmail"
                  id="name"
                  placeholder="Email"
                  onChange={this.loginInInfo}
                />
                <span className="spin" />
              </div>
              <div className="input">
                <input
                  type="password"
                  name="loginPassword"
                  id="pass"
                  placeholder="Password"
                  onChange={this.loginInInfo}
                />
                <span className="spin" />
              </div>
              <p style={{ color: "red" }}>{this.state.message}</p>
              <div className="button login" onClick={this.loggingprocess}>
                <button>
                  <span>Login</span> <i className="fa fa-check" />
                </button>
              </div>

              <Link to="/register">
                <div className="button register">
                  <button>
                    <span>Register</span> <i className="fa fa-check" />
                  </button>
                </div>
              </Link>
              <Link to="/forgotpassword">
                <a href className="pass-forgot">
                  Forgot your password?
                </a>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Loginpage;
