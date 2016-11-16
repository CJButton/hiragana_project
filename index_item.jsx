

import React from 'react';



export default class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      buttonClass: "",
      letterGroup: 1,
      theGuess: "",
      value: ""
    };
    this._showNextComponent = this._showNextComponent.bind(this);
    this.update = this.update.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.handleMistake = this.handleMistake.bind(this);
  }

  // gets called when the student enters a correct answer, or wishes to skip
  updateCharacterShown() {
    let incrementGroup = this.state.letterGroup += 1
    this.setState({
      letterGroup: incrementGroup,
      theGuess: "",
      value: ""
    });
  }

  _showNextComponent() {
    this.setState({
      showIndex: true,
      buttonClass: "dpnone",
    });
  }

  // updates the state with the currently entered input
  update(property) {
    console.log(this.state.theGuess);
    return e => this.setState({[property]: e.target.value})
  }

  handleMistake() {

  }

  // when user presses enter, checks answer in props
  handleGuess(e) {
    e.preventDefault();

    if (this.state.theGuess === this.props.items[this.state.letterGroup].eChar) {
      this.updateCharacterShown();
    } else {
      this.handleMistake();
    };
  }

  render() {
    return(
      <div>
        <div>
          "Letter goes here"
            {this.props.items[this.state.letterGroup].jChar}
        </div>
        <form onSubmit={this.handleGuess}>

          <input type="text"
                 placeholder="Enter your guess"
                 onChange={this.update("theGuess")}  />

          <input type="submit"/>
        </form>
      </div>
    );
  }

}
