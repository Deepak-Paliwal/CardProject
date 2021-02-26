import React from "react";
import Cards from "Cards/Cards.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboardview from "./Dashboardview.js";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh"
  }
});

class Templates extends React.Component {
  logout = () => {
    localStorage.removeItem("Userlogged");
    console.log("====>>>>>", this.props.history);
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Dashboardview logout={this.logout} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Cards />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Templates);
