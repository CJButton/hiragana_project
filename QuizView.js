
import { Router, Route, Link } from 'react-router'
import React from 'react';

import IndexComponent from './index_component';


export default class Quizview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            1: {
                1: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479352414/ka_uocs0v.png", eChar: "ka", pChar: "kah"},
                2: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479352414/ki_y8ksg2.png", eChar: "ki", pChar: "key"},
                3: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479352414/ku_kzg5ed.png", eChar: "ku", pChar: "coo"},
                4: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479351370/ke_z32cwf.png", eChar: "ke", pChar: "keh"},
                5: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479351370/ko_hhfgn5.png", eChar: "ko", pChar: "coh"}
               },
              2: {
                1: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/sa_htynpp.png", eChar: "sa", pChar: "sah"},
                2: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/shi_wtqdkp.png", eChar: "shi", pChar: "she"},
                3: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/su_u9seqb.png", eChar: "su", pChar: "sue"},
                4: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/se_g30gro.png", eChar: "se", pChar: "seh"},
                5: {jChar: "http://res.cloudinary.com/ddbfkqb9m/image/upload/v1479366267/so_bnc9lz.png", eChar: "so", pChar: "so"},
              },
      kanaClass: 1,
      showIndex: false,
      buttonClass: "startButton"
    };
    console.log("In quizview again");
    this._showNextComponent = this._showNextComponent.bind(this);
  }

  _showNextComponent() {
    this.setState({
      showIndex: true,
      buttonClass: "dpnone"
    });
  }

  _showSecondComponent() {
    this.setState({
      showIndex: true,
    })
  }

  render() {
    return(
        <div>
        <button className={this.state.buttonClass} onClick={this._showNextComponent}>Begin Quiz 1!</button>
          {this.state.showIndex ? <IndexComponent kana={this.state}/> : null }

          </div>
    );
  }
}
//
// <h2 className="welcome">Welcome to</h2>
// <h1 className="title">We're gonna Hiragana!</h1>

// <Button onClick={this._onButtonClick}>Button</Button>
//     {this.state.showComponent ?
//        <NewComponent /> :
//        null
//     }
