

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
    console.log("In IndexItem");
    console.log(this.props);
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
            let eTarget = document.getElementsByClassName(`index-eChar-${index}`)[0]
            let pTarget = document.getElementsByClassName(`index-pChar-${index}`)[0]
            debugger
            eTarget.innerHTML = el.eChar
            pTarget.innerHTML = el.pChar
        })
        //let eChar = document.getElementsByClassName("eChar")[0]
        //let pChar = document.getElementsByClassName("pChar")[0]
        // let eTarget = document.getElementsByClassName("index-eChar-1")[0]
        // let pTarget = document.getElementsByClassName("index-pChar-1")[0]
        // eTarget.innerHTML = el.eChar
        // pTarget.innerHTML = el.pChar

  }

  tableContent() {
    let indexKey = this.props.kana.kanaClass
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
    )
  }

  tableRow(el) {
    return (
    <tr className="index-th-elements">
      <th><img src={el.jChar} className={`index-img-${el}`} /></th>
      <th className={`index-eChar-${el}`}>{el.eChar}</th>
      <th className={`index-pChar-${el}`}>{el.pChar}</th>
    </tr>
    )
  }

  _showNextComponent() {
    this.setState({
      showIndex: true,
      buttonClass: "dpnone"
    });
  }

  render() {
    console.log("Parent render", this.props);
    console.log(this.props.kana[this.props.kana.kanaClass][1].eChar);
    return(
      <div>
        <p>"In the index component!"</p>
        <div>
        <div className={this.state.buttonClass} id="indexHider">
        <table className="indexTable">

            {this.tableContent()}

        </table>
        </div>
          <div>
            <button className={this.state.buttonClass} onClick={this._showNextComponent}>Let's Practice</button>
            {this.state.showIndex ? <IndexItem kana={this.props.kana}/> : null
            }
          </div>
        </div>
        </div>
    );
  }
}




//
// <tbody className="index-body">
//   <tr>
//     <th className="index-col">Hiragana</th>
//     <th className="index-rom">Romaji</th>
//     <th className="index-pro">Pronunciation</th>
//   </tr>
//   {this.tableContent()}
//
//
// </tbody>












// <tr className="index-th-elements">
//   <th><img src={this.props.kana[this.props.kana.kanaClass][1].jChar} className="index-img"/></th>
//   <th>{this.props.kana[this.props.kana.kanaClass][1].eChar}</th>
//   <th>{this.props.kana[this.props.kana.kanaClass][1].pChar}</th>
// </tr>
// <tr className="index-th-elements">
//   <th><img src={this.props.kana[this.props.kana.kanaClass][2].jChar}className="index-img"/></th>
//   <th>{this.props.kana[this.props.kana.kanaClass][2].eChar}</th>
//   <th>{this.props.kana[this.props.kana.kanaClass][2].pChar}</th>
// </tr>
// <tr className="index-th-elements">
//   <th><img src={this.props.kana[this.props.kana.kanaClass][3].jChar}className="index-img"/></th>
//   <th>{this.props.kana[this.props.kana.kanaClass][3].eChar}</th>
//   <th>{this.props.kana[this.props.kana.kanaClass][3].pChar}</th>
// </tr>
// <tr className="index-th-elements">
//   <th><img src={this.props.kana[this.props.kana.kanaClass][4].jChar}className="index-img"/></th>
//   <th>{this.props.kana[this.props.kana.kanaClass][4].eChar}</th>
//   <th>{this.props.kana[this.props.kana.kanaClass][4].pChar}</th>
// </tr>
// <tr className="index-th-elements">
//   <th><img src={this.props.kana[this.props.kana.kanaClass][5].jChar}className="index-img"/></th>
//   <th>{this.props.kana[this.props.kana.kanaClass][5].eChar}</th>
//   <th>{this.props.kana[this.props.kana.kanaClass][5].pChar}</th>
// </tr>
