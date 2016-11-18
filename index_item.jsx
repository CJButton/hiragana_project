

import React from 'react';
import IndexComponent from './index_component';


export default class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClass: "thiswilldisappear",
      showNextIndex: false,
      showPreviousIndex: false,
      arrowClass: "",
      charGroup: 1,
      theGuess: "",
      errors: "",
      imgClass: "",
      imgItem: "item-img",
    };
    // this.props.kana.kanaClass = 2;
    console.log(this.props);
    this._showNextComponent = this._showNextComponent.bind(this);
    this.update = this.update.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.handleMistake = this.handleMistake.bind(this);
    this.arrowsShow1 = this.arrowsShow1.bind(this);
    this.arrowsShow2 = this.arrowsShow2.bind(this);
    this._showNextIndexComponent = this._showNextIndexComponent.bind(this);
  }

  updateCharacterShown() {
    if (this.state.charGroup === 5) {
      this._showNextComponent();
      this.setState({
        showIndex: true
      });
    } else {
    let incrementGroup = this.state.charGroup += 1;
    this.setState({
        charGroup: incrementGroup,
        theGuess: ""
      });
    }
  }

  _showNextIndexComponent() {
    console.log(this.props);
    this.props.kana.kanaClass += 1;
    let targetDiv = document.getElementById("indexHider");
    targetDiv.className="dpshow";
    this.setState({
      showNextIndex: true,
      buttonClass: "dpnone"
      });
  }

  arrowsShow1() {
    // next exam
    if (this.state.imgItem === "item-img2") {
    return (
      <div>
      <button className={this.state.arrowClass} onClick={this._showNextIndexComponent}>Next</button>
        {this.state.showNextIndex ? <IndexComponent kana={this.props.kana}/> : null
      }
      </div>
      );
    }
  }

  arrowsShow2() {
    // previous exam
    if (this.state.imgItem === "item-img2") {
      return (
        <p>TesterArrow2</p>
      );
    }
  }

  tester() {
    console.log(this.state);
  }

  _showNextComponent() {
    this.setState({
      imgItem: "item-img2",

    });

    this.tester();
  }

  // updates the state with the currently entered input
  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleMistake() {
    if (this.state.errors !== ""){
    return (
      <ul>
        <p>Not quite! Please try again or skip!</p>
      </ul>
    )};
  }

  // when user presses enter, checks answer in props
  handleGuess(e) {
    e.preventDefault();

    if (this.state.theGuess === this.props.kana[this.props.kana.kanaClass][this.state.charGroup].eChar) {
      this.setState({errors: ""});
      this.updateCharacterShown();
    } else {
      this.setState({errors: "Not quite. Try again."}),
      this.handleMistake();
    }
  }

  render() {
    return(
      <div>
        <div className={this.state.buttonClass}>
        {this.arrowsShow2()}
        <div className={this.state.imgClass}>
            <img src={this.props.kana[this.props.kana.kanaClass][this.state.charGroup].jChar} className={this.state.imgItem}/>
        </div>
        <form onSubmit={this.handleGuess}>

          <input type="text"
                 placeholder="Enter your guess"
                 value={this.state.theGuess}
                 onChange={this.update("theGuess")}  />

               <button type="submit">Submit answer</button>
        </form>
        {this.handleMistake()}
        {this.arrowsShow1()}
        </div>
        <p>"Does this remain?"</p>
      </div>
    );
  }

}
