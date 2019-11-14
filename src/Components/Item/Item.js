import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

class ConnectedItem extends Component {
  render() {
    return (
      <Card
        style={{ width: 320, height: 535, margin: 20, display: "inline-block" }}
      >
        <CardActionArea
          style={{
            marginBottom: -10
          }}
          onClick={() => {
            this.props.history.push("/details/" + this.props.item.id);
          }}
        >
          <CardMedia
            style={{
              height: 400,
              width: 270,
              marginLeft: 25,
              marginTop: 10,
              objectFit: "cover"
            }}
            image={this.props.item.image}
          />
          <CardContent style={{ height: 50, padding: 10 }}>
            <div
              style={{
                marginLeft: 15,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              Title:{" "}
              <b>
                <i style={{ color: "#ff9b9b" }}>{this.props.item.name} </i>{" "}
              </b>
            </div>
            <div
              style={{
                marginLeft: 15,
                marginTop: 3,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              Author:{" "}
              <i style={{ color: "#58c0e7" }}>{this.props.item.author}</i>
            </div>
            <div
              style={{
                marginLeft: 15,
                marginTop: 3,
                marginBottom: 5,
                fontWeight: "bold",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              Price: <i> {this.props.item.price} RON</i>
            </div>
            <div
              style={{ 
                color: "#1a9349", 
                fontWeight: "bold",
                 marginLeft: 15 
                }}
            >
              {this.props.item.popular && "Popular"}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{ display: "flex", alignItems: "center", height: 40 }}
        >
          <Button
            size="small"
            style={{ marginRight: 60, marginLeft: 11, marginTop: 25, border: "1px solid gray" }}
            onClick={() => {
              this.props.history.push("/details/" + this.props.item.id);
            }}
          >
            {" "}
            Details
          </Button>
          <Tooltip title="Add to cart">
            <IconButton
              style={{ marginLeft: 100, marginTop: 25}}
              size="small"
              onClick={e => {
                e.stopPropagation();
                this.props.addItemInCart({ ...this.props.item, quantity: 1 });
              }}
              color="primary"
              aria-label="Add to shopping cart"
            >
              <AddShoppingCartIcon size="small" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemInCart: (item) => dispatch(actions.addItemInCart(item))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ConnectedItem));
