

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
    console.log(this.props);
    this._showNextComponent = this._showNextComponent.bind(this);
  }

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
        <div className={this.state.buttonClass}>
        <table className="indexTable">
          <tbody className="index-body">
            <tr>
              <th className="index-col">Hiragana</th>
              <th className="index-rom">Romaji</th>
              <th className="index-pro">Pronunciation</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[this.props.kana.kanaClass][1].jChar} className="index-img"/></th>
              <th>{this.props.kana[this.props.kana.kanaClass][1].eChar}</th>
              <th>{this.props.kana[this.props.kana.kanaClass][1].pChar}</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[this.props.kana.kanaClass][2].jChar}className="index-img"/></th>
              <th>{this.props.kana[this.props.kana.kanaClass][2].eChar}</th>
              <th>{this.props.kana[this.props.kana.kanaClass][2].pChar}</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[this.props.kana.kanaClass][3].jChar}className="index-img"/></th>
              <th>{this.props.kana[this.props.kana.kanaClass][3].eChar}</th>
              <th>{this.props.kana[this.props.kana.kanaClass][3].pChar}</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[this.props.kana.kanaClass][4].jChar}className="index-img"/></th>
              <th>{this.props.kana[this.props.kana.kanaClass][4].eChar}</th>
              <th>{this.props.kana[this.props.kana.kanaClass][4].pChar}</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[this.props.kana.kanaClass][5].jChar}className="index-img"/></th>
              <th>{this.props.kana[this.props.kana.kanaClass][5].eChar}</th>
              <th>{this.props.kana[this.props.kana.kanaClass][5].pChar}</th>
            </tr>
          </tbody>
        </table>
        </div>
          <div>
            <button className={this.state.buttonClass} onClick={this._showNextComponent}>Let's Practice</button>
            {this.state.showIndex ? <IndexItem items={this.props.kana}/> : null
            }
          </div>
        </div>
        </div>
    );
  }
}
