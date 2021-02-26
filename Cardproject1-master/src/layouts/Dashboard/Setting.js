import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboardview from "./Dashboardview.js";
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class Setting extends Component {
  state = {
    newname: "",
    password: "",
    newpassword: "",
    passwordmessage: "",
    valid: true
  };
  logout = () => {
    localStorage.removeItem("Userlogged");
    this.props.history.push("/");
  };

  onChangeEnter = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSave = () => {
    let { password, newpassword, newname, passwordmessage } = this.state;
    let alluserdata = JSON.parse(localStorage.getItem("Data"));
    let loggedinuser = localStorage.getItem("Userlogged");
    if ((password.length && newpassword.length) || newname.length) {
      alluserdata.map((user, index) => {
        if (newname.length != 0) {
          user.signupUsername = newname;
        }
        if (
          loggedinuser === user.signupEmail &&
          password !== user.signupPassword &&
          (password.length && newpassword.length)
        ) {
          console.log("HEll", password, user.signupPassword);

          this.setState({
            passwordmessage: "Password Not Match",
            valid: false
          });
        } else if (
          loggedinuser === user.signupEmail &&
          password === user.signupPassword &&
          newpassword.length
        ) {
          user.signupPassword = newpassword;
          localStorage.setItem("Data", JSON.stringify(alluserdata));
          this.props.history.push("/dashboard");
        } else if (this.state.valid !== true) {
          localStorage.setItem("Data", JSON.stringify(alluserdata));
          this.props.history.push("/dashboard");
        }
      });
    }
  };

  userDelete = () => {
    let loggedinuser = localStorage.getItem("Userlogged");
    let alluserdata = JSON.parse(localStorage.getItem("Data"));
    let index = 0;
    alluserdata.map((user, index1) => {
      if (user.signupEmail === loggedinuser) {
        index = index1;
      }
    });
    alluserdata.splice(index, 1);
    localStorage.removeItem("Userlogged");
    if (alluserdata.length != 0) {
      localStorage.setItem("Data", JSON.stringify(alluserdata));
    } else {
      localStorage.clear();
    }
    this.props.history.push("/");
  };

  componentWillMount = () => {
    if (!localStorage.getItem("Userlogged")) {
      this.props.history.push("/");
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <div className={classes.root}>
            <Dashboardview logout={this.logout} />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Setting1
                classes={classes}
                userDelete={this.userDelete}
                onChangeEnter={this.onChangeEnter}
                onSave={this.onSave}
                state={this.state}
              />
            </main>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(styles)(Setting);

const Setting1 = props => {
  const { classes, userDelete, onChangeEnter, onSave, state } = props;

  return (
    <div
      style={{
        // border: "1px solid",
        height: "52%",
        position: "relative",
        marginLeft: "30%",
        boxShadow: "0px 0px px 0px #999"
      }}
    >
      <label for="exampleForm2">Change Name</label>
      <input
        name="newname"
        placeholder="Change Name"
        type="text"
        id="exampleForm2"
        className="form-control"
        style={{ width: "35%" }}
        onChange={onChangeEnter}
      />
      <label for="exampleForm2">Password</label>
      <input
        name="password"
        placeholder="Password"
        type="text"
        id="exampleForm2"
        className="form-control"
        style={{ width: "35%" }}
        onChange={onChangeEnter}
      />
      <p style={{ color: "red" }}>{state.passwordmessage}</p>
      <label for="exampleForm2">New Password</label>
      <input
        name="newpassword"
        placeholder="New Password"
        type="text"
        id="exampleForm2"
        className="form-control"
        style={{ width: "35%" }}
        onChange={onChangeEnter}
      />
      <div style={{ marginTop: "17px" }}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={userDelete}
        >
          Deactivate Account
          <DeleteIcon className={classes.rightIcon} />
        </Button>
      </div>
      <div style={{ marginTop: "17px" }}>
        {" "}
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={onSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
