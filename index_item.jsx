

import React from 'react';
import IndexComponent from './index_component';
import Quizview from './QuizView';


export default class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();

    this.getState = this.getState.bind(this);
    console.log(this.props);
    this._showNextComponent = this._showNextComponent.bind(this);
    this.update = this.update.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.handleMistake = this.handleMistake.bind(this);
    this.arrowsShow1 = this.arrowsShow1.bind(this);
    this.arrowsShow2 = this.arrowsShow2.bind(this);
    this._showNextIndexComponent = this._showNextIndexComponent.bind(this);
  }

  getState() {
    return {
      showNextIndex: false,
      showPreviousIndex: false,
      arrowClass: "",
      charGroup: 1,
      theGuess: "",
      errors: "",
      imgClass: "",
      imgItem: "item-img"
    };
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
    this.props.kana.kanaClass += 1;
    let targetEls = document.getElementsByClassName("indexStuff");
    targetEls[0].classList.remove("dpnone");
    targetEls[1].classList.remove("dpnone");

    let targetItems = document.getElementsByClassName("indexRender");
    targetItems[0].classList.add("dpnone");

    this.setState({
      showNextIndex: true,
      charGroup: 1
      });
  }

  arrowsShow1() {
    // next exam
    if (this.state.imgItem === "item-img2") {
    return (
      <div>
      <button className={this.state.arrowClass} id="nextButton" onClick={this._showNextIndexComponent}>Next</button>
        {this.state.showNextIndex ? <IndexComponent kana={this.props.kana}/> : null
      }
      </div>
      );
    }
  }

  arrowsShow2() {
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
        <div className="indexRender">
            <div>
              What is the correct romaji reading for... ?
            </div>
        {this.arrowsShow2()}
        <div className={this.state.imgClass}>
            <img src={this.props.kana[this.props.kana.kanaClass][this.state.charGroup].jChar} className="item-img"/>
        </div>
        <form onSubmit={this.handleGuess}>

          <input type="text"
                 className="entryField"
                 placeholder="Enter your guess"
                 value={this.state.theGuess}
                 onChange={this.update("theGuess")}  />
               <br></br>
               <button className="submitButton" type="submit">Submit</button>
        </form>
        {this.handleMistake()}
        {this.arrowsShow1()}
        </div>
      </div>
    );
  }

}
