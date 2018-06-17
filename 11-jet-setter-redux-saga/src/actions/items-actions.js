import { ADD_NEW_ITEM, REMOVE_ITEM, FETCH_ITEMS ,TOGGLE_ITEM, MARK_ALL_AS_UNPACKED, UPDATE_ALL_ITEMS } from '../constants';
import Api from '../lib/api';

export const updateAllItems = (items) => {
  return {
    type:UPDATE_ALL_ITEMS,
    items
  }
}

export const fetchItems = () =>{
  return {
    type: FETCH_ITEMS
  }
}


export const addNewItem = (value) => {
  const item ={
    packed: false,
    value
  }
  return (dispatch)=>{
    Api.add(item).then(item=>{
      dispatch({
        type: ADD_NEW_ITEM,
        item
      })
    })
  }
};

export const toggleItem = item => {
  const updatedItem = { ...item, packed: !item.packed };
  return dispatch => {
    Api.update(updatedItem).then(() => {
      dispatch ({
        type: TOGGLE_ITEM,
        item: updatedItem
      });
    });
  }
};

export const removeItem = (id) => {
  return dispatch => {
    Api.delete(id).then(() => {
      dispatch(({
        type: REMOVE_ITEM,
        id,
      }));
    })
  }
};

export const markAllAsUnpacked = () => {
  return dispatch => {
    Api.markAllAsUnpacked().then(() => {
      dispatch({
        type: MARK_ALL_AS_UNPACKED
      })
    });
  }
}