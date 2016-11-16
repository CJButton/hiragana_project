

import React from 'react';



export default class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      buttonClass: "",
      letterGroup: 1,
      theGuess: ""
    };
    this._showNextComponent = this._showNextComponent.bind(this);
    this.update = this.update.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
  }

  // gets called when the student enters a correct answer, or wishes to skip
  updateCharacterShown() {
    incrementGroup = this.state.letterGroup += 1
    this.setState({
      letterGroup: incrementGroup
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
    return e => this.setState({[property]: e.target.value})
  }

  // when user presses enter, checks answer in props
  handleGuess() {

  }

  render() {
    return(
      <div>
        <div>
          "Letter goes here"
            {this.props.items[this.state.letterGroup].jChar}
        </div>
        <form onSubmit={this.handleGuess}>
          <input type="text" value="What is the romaji?" onChange={this.update("theGuess")}  />
          <input type="submit" value="Enter"/>
        </form>
      </div>
    );
  }

}
