import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CardMedia from "@material-ui/core/CardMedia";




// This component shows the items user checked out from the cart.
class ConnectedOrder extends Component {
  render() { 
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 25, marginTop: 20 , marginLeft: "40%"}}>
          <i>Order summary</i>
        </div>
        <Table style={{marginTop: 60}}>
          <TableHead>
            <TableRow>
              <TableCell style={{fontSize: 18, width: 600}}><b>Product</b></TableCell>
              <TableCell style={{fontSize: 18, width: 600}}><b>Image</b></TableCell>
              <TableCell style={{fontSize: 18, width: 600}}><b>Price</b></TableCell>
              <TableCell style={{fontSize: 18, width: 600}}><b>Quantity</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.checkedOutItems.map((item, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell style={{fontSize: 18, color: "blue"}}><i>{item.name} - {item.author}</i></TableCell>
                  <TableCell>
                    <CardMedia
                      style={{ height: 150, width: 100, backgroundPosition: "top"}}
                      image={item.image}
                    />
                  </TableCell>
                  <TableCell style={{fontSize: 18, color: "#e64444"}}><b>{item.price} RON</b></TableCell>
                  <TableCell style={{fontSize: 18}}>{item.quantity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
          Total price: {totalPrice} RON
         
        </div>
          <Button
          color="primary"
          variant="outlined"
          disabled={totalPrice === 0}
          onClick={() => { 
            this.props.history.push('/checkout');
            this.props.setCheckedOutItems([]);
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Purchase
        </Button>
        <Button
          color="primary"
          variant="outlined"
          disabled={totalPrice === 0}
          onClick={() => { 
            this.props.history.push('/borrow');
            this.props.setCheckedOutItems([]);
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Borrow
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          disabled={totalPrice === 0}
          onClick={() => {
            this.props.history.push('/');
            this.props.setCheckedOutItems([]);
          }}
          style={{ margin: 5, marginTop: 30 }}
        >
          Discard
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    checkedOutItems: state.cart.checkedOutItems,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCheckedOutItems: (items) => dispatch(actions.setCheckedOutItems(items)),
  }
}

const Order = withRouter(connect(mapStateToProps, mapDispatchToProps)(ConnectedOrder));

export default Order;
