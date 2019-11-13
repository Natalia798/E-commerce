import React, { Component } from "react";
import queryString from "query-string";

import Item from "../Item/Item";
import Api from "../../Api";
import PriceDialog from "../PriceDialog/PriceDialog";
import Paging from "../Paging/Paging";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      openPriceDialog: false,
      totalItemsCount: null,
      items: []
    };

    this.updateQueryString = this.updateQueryString.bind(this);
  }


  updateQueryString(newValues) {
    let currentQs = queryString.parse(this.props.location.search);
    let newQS = { ...currentQs, ...newValues };
    this.props.history.push("/?" + queryString.stringify(newQS));
  }

  async fetchData() {

    this.setState({ loading: true });

    let qsAsObject = queryString.parse(this.props.location.search);
    let results = await Api.searchItems({ ...qsAsObject, usePriceFilter: qsAsObject.usePriceFilter === "true" });

    this.setState({
      items: results.data,
      loading: false,
      totalItemsCount: results.totalLength
    });
  }

  componentDidMount() {
    this.fetchData();
  }


  componentDidUpdate(prevProps, prevState, snapshot) {

    let currentQS = queryString.parse(this.props.location.search);
    let oldQS = queryString.parse(prevProps.location.search)

    // Check if the query strings changed.
    let check1 = Object.entries(currentQS).some(([k, v]) => v !== oldQS[k]);
    let check2 = Object.entries(oldQS).some(([k, v]) => v !== currentQS[k]);
    let isDifferent = check1 || check2;

    // We will refetch products only when query string changes.
    if (isDifferent) {
      this.fetchData();
    }
  }

  handleSortChange = e => {
    this.updateQueryString({ sortValue: e.value });
  };

  getPageTitle() {
    let pageTitle = "Search results";
    let category = queryString.parse(this.props.location.search).category;
    let directClick = queryString.parse(this.props.location.search).directClick === "true";

    if (!category) {
      pageTitle = "Popular products";
    } else if (directClick) {
      pageTitle = category;
    }
    return pageTitle;
  }

  render() {
    let qs = queryString.parse(this.props.location.search);
    let usePriceFilter = qs.usePriceFilter === "true";
    let minPrice = qs.minPrice || 0;
    let maxPrice = qs.maxPrice || 150;
    let itemsPerPage = qs.itemsPerPage || 10;
    let page = qs.page || 1;
    let sortValue = qs.sortValue || "lh";
    let pageTitle = this.getPageTitle();

    if (this.state.loading) {
      return (
        <CircularProgress className="circular" />
      );
    }

    return (
      <div
      >
        {/* Product list header */}
        <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, fontSize: 24 }}>
            <div style={{marginLeft: 100}}>{pageTitle}</div>
            {!this.state.loading && (
              <div style={{ fontSize: 12, color: "gray", marginTop: 5, marginLeft: 120 }}>
                Total results found: {this.state.totalItemsCount}
              </div>)}
          </div>

          <FormControlLabel
            style={{ marginBottom: 5, marginRight: 20 }}
            control={
              <Checkbox
                color="primary"
                checked={usePriceFilter}
                onChange={e => {
                  this.updateQueryString(
                    { usePriceFilter: e.target.checked, page: 1 }
                  );
                }}
              />
            }
            label="Filter by price"
          />
          {usePriceFilter && (
            < Tooltip title="Click to change range" disableFocusListener>
              <Button
                variant="outlined"
                style={{ marginRight: 30 }}
                onClick={() => {
                  this.setState({
                    openPriceDialog: true
                  });
                }}
              >
                {minPrice +
                  "RON - " +
                  maxPrice +
                  "RON"}
              </Button>
            </Tooltip>
          )}
          <Select
            style={{ maxWidth: 400, marginBottom: 10, marginRight: 65}}
            value={sortValue}
            MenuProps={{
              style: {
                maxHeight: 500
              }
            }}
            onChange={e => {
              this.updateQueryString({ sortValue: e.target.value });
            }}
          >
            <MenuItem value={"lh"}>
              Sort by price: low to high
               </MenuItem>
            <MenuItem value={"hl"}>
              Sort by price: high to low
              </MenuItem>

          </Select>
        </div>
        {/* Here go the items */}
        <div style={{marginLeft: 50}}>
        {
          this.state.items.map(item => {
            return  <Item key={item.id} item={item}  /> 
          })
        }
        </div>
        {/* Paging component */}
        {
          !this.state.loading && !!this.state.totalItemsCount && (
            <Paging
              itemsPerPage={itemsPerPage}
              page={page}
              updateQueryString={this.updateQueryString}
              totalItemsCount={this.state.totalItemsCount}
            />
          )
        }
        {/* This is dialog which opens up for setting price filter */}
        <PriceDialog
          open={this.state.openPriceDialog}
          min={minPrice}
          max={maxPrice}
          onSave={(min, max) => {
            this.setState({ openPriceDialog: false });
            this.updateQueryString({ minPrice: min, maxPrice: max, page: 1 });
          }}
          onClose={() =>
            this.setState({
              openPriceDialog: false
            })
          }
        />
      </div >
    );
  }
}

export default ProductList;
