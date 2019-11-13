import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

const CartRow = props => {
  let { item } = props;
  return (
    <TableRow>
      <TableCell>
        <Link to={`/details/${item.id}`}>
          <div
            onClick={() => {
              props.showCartDlg(false);
            }}
          >
            {item.name}
          </div>
        </Link>
      </TableCell>
      <TableCell>
        <CardMedia
          style={{ height: 110, width: 70 , backgroundPosition: "top"}}
          image={item.image}
        />
      </TableCell>
      <TableCell>{item.price} RON</TableCell>
      <TableCell>
        <TextField
          type="number"
          style={{ width: 40 }}
          value={item.quantity}
          onChange={e => {
            let quantity = parseInt(e.target.value, 10);
            if (quantity < 0) return;
            props.updateCartItemQnt({ id: item.id, quantity });
          }}
        />
      </TableCell>
      <TableCell>
        <Button color="secondary" onClick={() => props.deleteCartItem(item.id)}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showCartDlg: status => dispatch(actions.showCartDlg(status)),
    updateCartItemQnt: obj => dispatch(actions.updateCartItemQnt(obj)),
    deleteCartItem: id => dispatch(actions.deleteCartItem(id))
  };
};

export default connect(null, mapDispatchToProps)(CartRow);
