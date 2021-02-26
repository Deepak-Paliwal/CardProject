import React, { Component } from "react";
import Cards from "Cards/Cards.js";
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboardview from "../Dashboardview.js";
import { withStyles } from "@material-ui/core/styles";
import Nothingfound from "Cards/images/nothing_found.png";
import { Button } from "react-bootstrap";
import Cardmodal from "./Cardmodal.js";
import Templatemodal from "./Template/Templatemodal.js";
import TCard1 from "./Template/TCard1.js";
import TCard2 from "./Template/TCard2.js";
import TCard3 from "./Template/TCard3.js";

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
  Nothingimage: {
    margin: " auto",
    width: "90%"
  },
  Addcardbutton: {
    display: "inline-block",
    float: "right"
  }
});

let Usercarddata;
let Cardinfofromlocal = [];

class Mycard extends Component {
  state = {
    modal: false,
    template: false,
    image: true,
    carddata: []
  };
  logout = () => {
    localStorage.removeItem("Userlogged");
    // console.log("====>>>>>", this.props.history);
    this.props.history.push("/");
  };

  Openmodal = () => {
    // console.log("Modal iS Opening");
    this.setState({ modal: true, template: false }, () =>
      window.scrollTo(0, 100)
    );
  };

  Closemodal = () => {
    console.log("Running");
    this.setState({ modal: false });
  };

  Saveandclosemodal = datacominfrommodal => {
    Usercarddata = datacominfrommodal;
    this.setState({ modal: false, template: true, image: false });
  };

  Templatecard = type => {
    let { carddata } = this.state;
    this.setState({ template: false });
    Usercarddata.cardtype = type;

    let Userareloggedin = localStorage.getItem("Userlogged");
    let AllUser = JSON.parse(localStorage.getItem("Data"));
    AllUser.map((user, index) => {
      if (user.signupEmail === Userareloggedin) {
        console.log(user, user.Cardinfo, "test");
        user.Cardinfo.push(Usercarddata);
        Cardinfofromlocal = [...user.Cardinfo];
      }
    });
    localStorage.removeItem("Data");
    localStorage.setItem("Data", JSON.stringify(AllUser));
    console.log("..............", Cardinfofromlocal);
    new Promise((resolve, reject) => {
      resolve(this.setState({ carddata: Cardinfofromlocal }));
    }).then(res => {
      console.log("The state Changed is", this.state.carddata);
      {
        this.state.carddata.length ? this.setState({ image: false }) : null;
      }
    });
  };

  componentWillMount = () => {
    if (!localStorage.getItem("Userlogged")) {
      this.props.history.push("/");
    }
    let Userareloggedin = localStorage.getItem("Userlogged");
    let AllUser = JSON.parse(localStorage.getItem("Data"));
    AllUser.map((user, index) => {
      if (user.signupEmail === Userareloggedin) {
        console.log(user, user.Cardinfo, "test");
        Cardinfofromlocal = [...user.Cardinfo];
      }
    });
    new Promise((resolve, reject) => {
      resolve(this.setState({ carddata: Cardinfofromlocal }));
    }).then(res => {
      console.log("The state Changed is", this.state.carddata);
      console.log("The card length is:", this.state.carddata.length);
      {
        this.state.carddata.length ? this.setState({ image: false }) : null;
      }
    });
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
            <div className={classes.Addcardbutton}>
              <Button bsSize="large" onClick={this.Openmodal}>
                Add Cards
              </Button>
            </div>
            {this.state.image ? (
              <img
                className={classes.Nothingimage}
                src={Nothingfound}
                alt="Nothing Found"
              />
            ) : null}
            <ul>
              {" "}
              {this.state.template ? (
                <Templatemodal
                  Templatecard={this.Templatecard}
                  User={Usercarddata}
                />
              ) : null}
              {this.state.carddata.map((user, index) => {
                console.log("==>>>>", user);
                switch (user.cardtype) {
                  case "TCard1": {
                    return (
                      <div
                        style={{
                          // border: "1px solid black",
                          display: "block",
                          width: "310px",
                          height: "350px",
                          marginTop: "31px",
                          boxShadow: "0 5px 10px rgba(0,0,0,0.1)"
                        }}
                      >
                        <TCard1 User={user} index={index} />
                      </div>
                    );
                    break;
                  }
                  case "TCard2": {
                    return (
                      <div
                        style={{
                          // border: "1px solid black",
                          display: "block",
                          marginTop: "31px"
                        }}
                      >
                        <TCard2 User={user} index={index} />
                      </div>
                    );
                    break;
                  }
                  case "TCard3": {
                    return (
                      <div
                        style={{
                          // border: "1px solid black",
                          display: "block",
                          marginTop: "31px"
                        }}
                      >
                        <TCard3 User={user} />
                      </div>
                    );
                    break;
                  }
                  default: {
                    console.log("Default Running");
                  }
                }
              })}
            </ul>
            {this.state.modal ? (
              <Cardmodal
                Closemodal={this.Closemodal}
                Saveandclosemodal={this.Saveandclosemodal}
              />
            ) : null}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Mycard);
