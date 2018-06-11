import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    // Set the initial state,
    items: defaultState
  };

  addItems = (item) =>{
    this.setState({items:[item,...this.state.items]})
  }

  removeItem = (id) =>{
    // console.log(id)
    this.setState({
      items: this.state.items.filter(item=>item.id!==id)
    })
  }

  toggleItem = (id) =>{
    // console.log(id)
    this.setState({
      items:this.state.items.map(item=>{
        if(item.id===id){
          item.packed= !item.packed
        }
        return item
      })
    })
  }

  markAllAsUnPacked = ()=>{
    this.setState({
      items:this.state.items.map(item=>{
          item.packed= false
          return item
      })
    })
  }
  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  render() {
    // Get the items from state
    const { items } = this.state;
    const packedItems = items.filter(item=>item.packed)
    const unPackedItems = items.filter(item=>!item.packed)
    return (
      <div className="Application">
        <NewItem onSubmit={this.addItems}/>
        <CountDown />
        <Items title="Unpacked Items" onToggleItem ={this.toggleItem} onRemove={ this.removeItem } items={unPackedItems} />
        <Items title="Packed Items" onToggleItem ={this.toggleItem} onRemove={ this.removeItem } items={packedItems} />
        <button className="button full-width" onClick={this.markAllAsUnPacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
