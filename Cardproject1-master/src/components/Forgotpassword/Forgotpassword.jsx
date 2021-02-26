import React, { Component } from "react";

class Forgotpassword extends Component {
  state = {
    email: "",
    newpassword: "",
    message: ""
  };

  Enterinfo = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  Sendinfo = e => {
    e.preventDefault();
    let { email } = this.state;
    let { newpassword } = this.state;

    let userfromlocalstorage = JSON.parse(localStorage.getItem("Data"));
    let totalpersoninstorage=0;

    if (userfromlocalstorage !== null) {
      userfromlocalstorage.map((user, index) => {
        totalpersoninstorage+=1; 
        if (user.signupEmail === this.state.email) {
          //  console.log("Hey We are changing",newpassword);
          if(newpassword.trim().length >0 ){
          user.signupPassword = newpassword;
          let data = userfromlocalstorage;
          localStorage.clear();
          localStorage.setItem("Data", JSON.stringify(data));
           localStorage.setItem("Userlogged",email)
          this.props.history.push("/dashboard");
          }
          else{
          return  this.setState({message:"Enter Password"});
          }
        } else if(totalpersoninstorage ===  userfromlocalstorage.length-1){
         return  this.setState({message:"Email not Found"})
        }
      });
    } else {
      this.setState({ message: "DataBase is Empty" });
    }
  };

  render() {
    return (
      <div className="BackgroundColor">
        <div className="materialContainer">
          <div className="box">
            <form>
              {" "}
              <div className="title">Forgot Password</div>
              <div className="input">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter E-mail"
                  onChange={this.Enterinfo}
                />
                <span className="spin" />
              </div>
              <div className="input">
                <input
                  type="password"
                  name="newpassword"
                  placeholder="New Password"
                  onChange={this.Enterinfo}
                />
                <span className="spin" />
              </div>
              <p style={{ color: "red" }}> {this.state.message}</p>
              <div className="button login" onClick={this.Sendinfo}>
                <button>
                  <span>Submit</span> <i className="fa fa-check" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgotpassword;
