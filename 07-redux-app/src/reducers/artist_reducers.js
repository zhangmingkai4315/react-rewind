import * as actionTypes from '../actions/action_types'
export default function reducers(state={},action){
  switch(action.type){
    case actionTypes.GET_ALL_ARTISTS:
      return {...state, artists:action.payload}
    default:
    return state;
  }
}