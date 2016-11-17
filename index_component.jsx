

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
              <th><img src={this.props.kana[1][1].jChar} className="index-img"/></th>
              <th>{this.props.kana[1][1].eChar}</th>
              <th>{this.props.kana[1][1].pChar}</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[1][2].jChar}className="index-img"/></th>
              <th>{this.props.kana[1][2].eChar}</th>
              <th>{this.props.kana[1][2].pChar}</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[3].jChar}className="index-img"/></th>
              <th>{this.props.kana[3].eChar}</th>
              <th>{this.props.kana[3].pChar}</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[4].jChar}/></th>
              <th>{this.props.kana[4].eChar}</th>
              <th>{this.props.kana[4].pChar}</th>
            </tr>
            <tr className="index-th-elements">
              <th><img src={this.props.kana[5].jChar}/></th>
              <th>{this.props.kana[5].eChar}</th>
              <th>{this.props.kana[5].pChar}</th>
            </tr>
          </tbody>
        </table>
        </div>
          <div>
            <button className={this.state.buttonClass} onClick={this._showNextComponent}>Let's Practice</button>
            {this.state.showIndex ? <IndexItem items={this.props.items}/> : null
            }
          </div>
        </div>
        </div>
    );
  }
}

// {this.tester.forEach((values, index) => {
//   Object.keys(values).map((ele, idx2) => {
//     <tr>
//       <td>{ele}</td>
//     </tr>;
//   });
// })}
