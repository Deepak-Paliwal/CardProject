import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/dashboard/dashboard">
      <ListItem button>
        <img src="https://png.icons8.com/office/40/000000/details.png" />
        <ListItemText>
          <h5>Dashboard</h5>
        </ListItemText>
      </ListItem>
    </Link>

    <Link to="/dashboard/mycard">
      <ListItem button>
        <img src="https://png.icons8.com/ultraviolet/40/000000/bank-card-back-side.png" />
        <ListItemText>
          <h5>My Cards</h5>
        </ListItemText>
      </ListItem>
    </Link>

    <Link to="/dashboard/template">
      <ListItem button>
        <img src="https://png.icons8.com/ultraviolet/40/000000/template.png" />
        <ListItemText>
          <h5>Templates</h5>
        </ListItemText>
      </ListItem>
    </Link>
    <Link to="/setting">
      <ListItem button>
        <img src="https://png.icons8.com/ultraviolet/40/000000/settings.png" />
        <ListItemText>
          <h5>Setting</h5>
        </ListItemText>
      </ListItem>
    </Link>
  </div>
);
