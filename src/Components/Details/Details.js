import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Api from "../../Api";
import Item from "../Item/Item";

import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";



class ConnectedDetails extends Component {
  constructor(props) {
    super(props);

    this.isCompMounted = false;

    this.state = {
      relatedItems: [],
      quantity: 1,
      item: null,
      loading: false
    };
  }

  async fetchProductUsingID(id) {
    this.setState({ loading: true });

    let item = await Api.getItemUsingID(id);

    let relatedItems = await Api.searchItems({
      category: item.category,
    });

    if (this.isCompMounted) {
      this.setState({
        item,
        relatedItems: relatedItems.data.filter(x => x.id !== item.id),
        loading: false,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchProductUsingID(this.props.match.params.id);

    }
  }

  componentDidMount() {
    this.isCompMounted = true;
    this.fetchProductUsingID(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.isCompMounted = false;
  }

  render() {
    if (this.state.loading) {
      return <CircularProgress className="circular" />;
    }

    if (!this.state.item) {
      return null;
    }
    return (
      <div style={{ padding: 10 }}>
        <div style={{ display: "flex" }}>
          {/*Item image */}
            <img
            src={this.state.item.image}
            alt=""
            width={400}
            height={600}
            style={{ objectFit: "cover", marginLeft: 350, marginRight: 50, marginTop: 100, marginBottom: 50 }}
          />
          

          {/*Item title */}
          <div
            style={{
              marginTop: 120,
              marginLeft: 50,
              marginRight: 50,
              width: 700,
              height: 30,
              fontSize: 25,
              fontFamily: "Georgia"
            }}
          >
            Title: <i style={{color: "#cc7c7c"}}> {this.state.item.name}</i>
          </div>

          {/*Item author */}
          <div
            style={{
              marginTop: 160,
              marginLeft: -750,
              width: 700,
              height: 30,
              fontSize: 25,
              fontFamily: "Georgia"
            }}
          >
            Author: <i style={{color: "#4699b8"}}> {this.state.item.author}</i>
          </div>

          {/* Item description */}
          <div>
            <div
              style={{
                marginTop: 200,
                marginBottom: 10,
                marginLeft: -700,
                fontSize: 20
              }}
            >
              Description:
            </div>
            <div
              style={{
                marginLeft: -650,
                maxWidth: 700,
                fontSize: 15,
                overflow: "auto",
                fontStyle: "italic",
                fontFamily: "Georgia"
              }}
            >
              {this.state.item.description ? (
                this.state.item.description
              ) : (
                <div style={{ color: "gray" }}>Not available</div>
              )}
            </div>

            {/*Item price, quantity and button */}
            <div
              style={{
                flex: 1,
                marginLeft: -480,
                marginTop: 20,
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ fontSize: 18, marginTop: 10 }}>
              <b>Price: <i style={{color: "blue"}}>{this.state.item.price} RON</i></b> 
              </div>
              {this.state.item.popular && (
                <span style={{ marginTop: 5, fontSize: 14, color: "#228B22" }}>
                  (Popular product)
                </span>
              )}

              <TextField
                type="number"
                value={this.state.quantity}
                style={{ marginTop: 20, marginBottom: 20, width: 50 , fontSize: 15}}
                label="Quantity"
                inputProps={{ min: 1, max: 10, step: 1 }}
                onChange={e => {
                  this.setState({ quantity: parseInt(e.target.value) });
                }}
              />
              <Button
                style={{ width: 200, marginTop: 5 }}
                color="primary"
                variant="outlined"
                onClick={() => {
                  this.props.addItemInCart({
                    ...this.state.item,
                    quantity: this.state.quantity
                  });
                }}
              >
                Add to Cart <AddShoppingCartIcon style={{ marginLeft: 5 }} />
              </Button>
            </div>
          </div>
        </div>

          <hr style={{color: "white", height: 2, backgroundColor: "white", marginTop: 10}}/>

        {/* Relateditems */}
        <div
          style={{
            marginTop: 50,
            marginLeft: 100,
            marginBottom: 20,
            fontSize: 24
          }}
        >
          <i>Related Items</i>
        </div >
        <div style={{marginLeft: 30}}>
        {this.state.relatedItems.slice(0, 3).map(x => {
          return <Item key={x.id} item={x}/>;
        })}
        </div>
        
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addItemInCart: (item) => dispatch(actions.addItemInCart(item))
  }
}

let Details = connect(null, mapDispatchToProps)(ConnectedDetails);
export default Details;
