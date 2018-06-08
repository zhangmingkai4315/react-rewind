import axios from 'axios'
import * as actionTypes from './action_types';

const URL = "http://localhost:3004"

export function artistListAll(){
  const request = axios.get(`${URL}/artists?_limit=6`)
                       .then(response=>response.data)

  return {
    type: actionTypes.GET_ALL_ARTISTS,
    payload: request
  }
}