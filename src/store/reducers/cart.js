import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cartItems: [],
  showCartDialog: false,
  showMenu: false,
  checkedOutItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_IN_CART: {
      let index = state.cartItems.findIndex(x => x.id === action.payload.id);
      if (index !== -1) {
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: state.cartItems[index].quantity + action.payload.quantity
        };
        return { ...state, cartItems: cloneCartItems };
      }
      return { ...state, cartItems: state.cartItems.concat(action.payload) };
    }
    case actionTypes.SHOW_CART_DLG: return { ...state, showCartDialog: action.payload };
    case actionTypes.DELETE_CART_ITEM: return {...state, cartItems: state.cartItems.filter(x => x.id !== action.payload) };
    case actionTypes.TOGGLE_MENU: return { ...state, showMenu: !state.showMenu };
    case actionTypes.SET_CHECKEDOUT_ITEMS: return { ...state, checkedOutItems: action.payload };
    case actionTypes.UPDATE_CART_ITEM_QUANTITY: {
      let index = state.cartItems.findIndex(x => x.id === action.payload.id);

      // User wants to update quantity of existing item.
      if (index !== -1) {
        let cloneCartItems = [...state.cartItems];
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: action.payload.quantity
        };
        return { ...state, cartItems: cloneCartItems };
      }

      // If we couldn't find such item, do nothing.
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
