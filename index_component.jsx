
import { Router, Route, Link } from 'react-router'
import React from 'react';
import ReactDOM from 'react-dom';

import IndexItem from './index_item';

export default class IndexComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      buttonClass: ""
    };

    this.setState({buttonClass: ""})
    this._showNextComponent = this._showNextComponent.bind(this);
    this.tableContent = this.tableContent.bind(this);
    this.tableRow = this.tableRow.bind(this);
  }

  componentDidMount() {
      let indexKey = this.props.kana.kanaClass
        let kanaKeys = Object.keys(this.props.kana[indexKey])
        kanaKeys.map((index) => {
            let el = this.props.kana[indexKey][index] // element 1 in the object
            let jTarget = document.getElementsByClassName(`index-img-${index}`)[0];
            let eTarget = document.getElementsByClassName(`index-eChar-${index}`)[0];
            let pTarget = document.getElementsByClassName(`index-pChar-${index}`)[0];

            jTarget.src = el.jChar
            eTarget.innerHTML = el.eChar
            pTarget.innerHTML = el.pChar
        })

        let targetItems = document.getElementsByClassName("indexRender")[0];
        console.log(targetItems);
        if (targetItems !== []) {
          targetItems.classList.remove("dpnone");
        }
  }

  tableContent() {
    let indexKey = this.props.kana.kanaClass;
    let kanaKeys = Object.keys(this.props.kana[indexKey]) //array of all the keys in the class
    console.log("insideTableFunction");
    return (
    <tbody className="index-body">
      <tr>
        <th className="index-col">Hiragana</th>
        <th className="index-rom">Romaji</th>
        <th className="index-pro">Pronunciation</th>
      </tr>
      {kanaKeys.map((el) => (
        this.tableRow(el)
      ))}

    </tbody>
  );
  }

  tableRow(el) {
    return (
    <tr className="index-th-elements">
      <th><img src={el.jChar} className={`index-img-${el} img`} /></th>
      <th className={`index-eChar-${el}`}>{el.eChar}</th>
      <th className={`index-pChar-${el}`}>{el.pChar}</th>
    </tr>
  );
  }

  _showNextComponent() {
    let targetEls = document.getElementsByClassName("indexStuff");
    let targetItems = document.getElementsByClassName("indexRender");
    targetEls[0].classList.add("dpnone");
    targetEls[1].classList.add("dpnone");
    this.setState({
      showIndex: true
    });
  }

  render() {
    // console.log("Parent render", this.props);
    // console.log(this.props.kana[this.props.kana.kanaClass][1].eChar);
    return(
      <div>
        <div>
        <div className="indexStuff">
        <table className="indexTable">

            {this.tableContent()}

        </table>
        </div>
          <div>
            <button className="indexStuff" onClick={this._showNextComponent}>Let's Practice</button>
            {this.state.showIndex ? <IndexItem kana={this.props.kana}/> : null
            }
          </div>
        </div>
        </div>
    );
  }
}
