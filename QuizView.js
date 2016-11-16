

import React from 'react';

import IndexComponent from './index_component';


export default class Quizview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        1: {jChar: "a", eChar: "b", pChar: "c"},
        2: {jChar: "d", eChar: "e", pChar: "f"},
        3: {jChar: "g", eChar: "h", pChar: "i"},
        4: {jChar: "j", eChar: "k", pChar: "l"}
      },
      showIndex: false,
      buttonClass: ""
    };
    this._showNextComponent = this._showNextComponent.bind(this);
  }

  // this will rerender the current window to the Index
  _showNextComponent() {
    this.setState({
      showIndex: true,
      buttonClass: "dpnone"
    });
  }

  render() {
    return(
      <div>
        <div>
        <button className={this.state.buttonClass} onClick={this._showNextComponent}>Begin!</button>
          {this.state.showIndex ? <IndexComponent items={this.state.items}/> : <h1>Welcome!</h1>
          }


        </div>
      </div>
    );
  }
}

// <Button onClick={this._onButtonClick}>Button</Button>
//     {this.state.showComponent ?
//        <NewComponent /> :
//        null
//     }
