

import React from 'react';



export default class IndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      buttonClass: "",
      charGroup: 1,
      theGuess: "",
      errors: "",
      imgClass: ""
    };
    this._showNextComponent = this._showNextComponent.bind(this);
    this.update = this.update.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.handleMistake = this.handleMistake.bind(this);
  }

  // gets called when the student enters a correct answer, or wishes to skip
  updateCharacterShown() {
    if (this.state.charGroup === 5) {
      this._showNextComponent();
    } else {
    let incrementGroup = this.state.charGroup += 1;
    this.setState({
        charGroup: incrementGroup,
        theGuess: "",
        value: ""
      });
    }
  }
  _showNextComponent() {
    console.log(this.state.value);
    this.setState({
      showIndex: true,
      imgClass: "dpnone",
    });
  }

  // updates the state with the currently entered input
  update(property) {
    console.log(this.state.theGuess);
    return e => this.setState({[property]: e.target.value});
  }

  handleMistake() {
    console.log("in handleMistake");
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

    if (this.state.theGuess === this.props.items[this.state.charGroup].eChar) {
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
        <div className={this.state.imgClass}>
            <img src={this.props.items[this.state.charGroup].jChar} className="item-img"/>
        </div>
        <form onSubmit={this.handleGuess}>

          <input type="text"
                 placeholder="Enter your guess"
                 value={this.state.theGuess}
                 onChange={this.update("theGuess")}  />

               <button type="submit">Submit answer</button>
        </form>
        {this.handleMistake()}
      </div>
    );
  }

}
