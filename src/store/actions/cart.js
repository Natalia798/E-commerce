import * as actionTypes from '../actions/actionTypes';

export const addItemInCart = item => ({
    type: actionTypes.ADD_ITEM_IN_CART,
    payload: item
  });

  export const showCartDlg = status => ({
    type: actionTypes.SHOW_CART_DLG,
    payload: status
  });

  export const deleteCartItem = id => ({
    type: actionTypes.DELETE_CART_ITEM,
    payload: id
  });

  export const toggleMenu = () => ({
    type: actionTypes.TOGGLE_MENU,
    payload: null
  });

  export const updateCartItemQnt = obj => ({
    type: actionTypes.UPDATE_CART_ITEM_QUANTITY,
    payload: obj
  });
  
  export const setCheckedOutItems = items => ({
    type: actionTypes.SET_CHECKEDOUT_ITEMS,
    payload: items
  });
