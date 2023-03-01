import { ListItemText } from '@mui/material';
import React from 'react';


let list = [ 
  { objectID: 1, 
    name: 'Elton Jhon', 
    age : 60,
    title: 'Redux',
    url: 'https://redux.js.org/'}, 
  { objectID: 2, 
    name:  'Elvis Persley', 
    age : 50,
    title: 'Redux',
    url: 'https://redux.js.org/' }, 
  { objectID: 3, 
    name: 'Kurt Cobain', 
    age : 24,
    title: 'Redux',
    url: 'https://redux.js.org/'} 
];


export default class Testing extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        list: list,
      };

      // this.onDismiss = this.onDismiss.bind(this);

      // this.onClickMe = this.onClickMe.bind(this);

  }

  onDismiss(id) {
      const updatedList = this.state.list.filter(function isNotId(item) {
      return item.objectID !== id;
    });
  }

    
  showWord() {
    let word = "HolA qUE tAL";

    for(let i=0;i < 1; i++) {
      console.log(word + "che")
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Testing</h1>
        {this.state.list.map(item => 
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span>
            <button
              onClick={()=> this.onDismiss(item.objectID)}
              type="button" 
            >
              Dismiss
            </button>
          </span>

          <button onClick={this.onClickMe} type="button">Click ME</button>
          </div>
        )}

        <p onClick={this.showWord}>ELEMENT</p>
      </div>
    );
  }
}


