import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import cartImage from "../../Assets/logo.jpg";
import * as actions from "../../store/actions/index";
import { categories } from "../../Data";
import "./Header.css";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Person from "@material-ui/icons/PersonOutline";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";



// Option items for product categories.
const categoryOptions = categories.map(x => {
  return (
    <MenuItem key={x.name} value={x.name}>
      {x.name}
    </MenuItem>
  );
});

class ConnectedHeader extends Component {
  state = {
    searchTerm: "",
    anchorEl: null,
    categoryFilterValue: categories[0].name
  };

  render() {
    let { anchorEl } = this.state;

    return (
      <AppBar
        position="static"
        style={{ backgroundColor: "#FAFAFB", padding: 10 }}
      >
        <Toolbar>
          <div className="left-part">
            <IconButton
              onClick={() => this.props.toggleMenu()}
            >
              <MenuIcon size="medium" />
            </IconButton>

            <img 
            src={cartImage} 
            alt={"Logo"} 
            style={{ marginLeft: 20, width: 150, height: 50 , cursor : "pointer" }} 
            onClick={() => this.props.history.push('/') } 
            />

            <TextField
              label="Search products"
              value={this.state.searchTerm}
              onChange={e => {
                this.setState({ searchTerm: e.target.value });
              }}
              style={{ marginLeft: 30, width: 250, marginBottom: 15 }}
            />

            <Select
              style={{ maxWidth: 200, marginLeft: 20 }}
              value={this.state.categoryFilterValue}
              MenuProps={{
                style: {
                  maxHeight: 500
                }
              }}
              onChange={e => {
                this.setState({ categoryFilterValue: e.target.value });
              }}
            >
              {categoryOptions}
            </Select>

            <Button
              style={{ marginLeft: 20 }}
              variant="outlined"
              color="primary"
              onClick={() => {
                this.props.history.push(
                  "/?category=" +
                    this.state.categoryFilterValue +
                    "&term=" +
                    this.state.searchTerm
                );
              }}
            >
              {" "}
              Search
            </Button>
          </div>
          <div className="right-part">
            {!this.props.auth.uid ? (
              <Button
                variant="outlined"
                style={{ marginRight: 20 }}
                color="primary"
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                Log in
              </Button>
            ) : (
              <Avatar
                onClick={event => {
                  this.setState({ anchorEl: event.currentTarget });
                }}
                style={{ backgroundColor: "#3f51b5", marginRight: 10 }}
              >
                <Person />
              </Avatar>
            )}
            <IconButton
              aria-label="Cart"
              onClick={() => this.props.showCartDlg(true)}
            >
              <Badge badgeContent={this.props.nrOfItemsInCard} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => {
                this.setState({ anchorEl: null });
              }}
            >
              <MenuItem
                onClick={() => {
                  this.setState({ anchorEl: null });
                  this.props.history.push("/order");
                }}
              >
                Checkout page
              </MenuItem>
              <MenuItem
                onClick={() => {
                  this.props.logout();
                  this.props.history.push("/");
                  this.setState({ anchorEl: null });
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    nrOfItemsInCard: state.cart.cartItems.length,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout()),
    toggleMenu: () => dispatch(actions.toggleMenu()),
    showCartDlg: (status) => dispatch(actions.showCartDlg(status))
  };
};



const Header = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConnectedHeader)
);
export default Header;
