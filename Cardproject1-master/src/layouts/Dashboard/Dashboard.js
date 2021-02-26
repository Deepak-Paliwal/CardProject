import React, { Component } from "react";
import Cards from "Cards/Cards.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboardview from "./Dashboardview.js";
import { withStyles } from "@material-ui/core/styles";
import logo from "Cards/images/DasGify.gif";

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
  gify: {
    width: "100%",
    opacity: "0.5"
  }
});

class Mycard extends Component {
  logout = () => {
    localStorage.removeItem("Userlogged");
    console.log("====>>>>>", this.props.history);
    this.props.history.push("/");
  };

  componentWillMount = () => {
    if (!localStorage.getItem("Userlogged")) {
      this.props.history.push("/");
    }
  };

  render() {
    const { classes } = this.props;
    console.log("This is==>", this.props);
    return (
      <React.Fragment>
        <CssBaseline />
        {/* Tommorw work will be from here */}
        <div className={classes.root}>
          <Dashboardview logout={this.logout} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <img src={logo} alt="loading..." className={classes.gify} />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Mycard);
