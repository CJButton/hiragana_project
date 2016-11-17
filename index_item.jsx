

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
      imgClass: "",
      imgItem: "item-img",
    };

    this._showNextComponent = this._showNextComponent.bind(this);
    this.update = this.update.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
    this.handleMistake = this.handleMistake.bind(this);
    this.arrowsShow = this.arrowsShow.bind(this);
  }

  // gets called when the student enters a correct answer, or wishes to skip
  updateCharacterShown() {
    console.log(this.state.charGroup);
    if (this.state.charGroup === 5) {
      this._showNextComponent();
      this.arrowsShow();
    } else {
    let incrementGroup = this.state.charGroup += 1;
    this.setState({
        charGroup: incrementGroup,
        theGuess: ""
      });
    }
  }

  arrowsShow() {
      console.log("in arrowsShow");
  }

  _showNextComponent() {
    this.setState({
      showIndex: true,
      imgItem: "item-img2"
    });
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

    if (this.state.theGuess === this.props.items[this.props.items.kanaClass][this.state.charGroup].eChar) {
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
            <img src={this.props.items[this.props.items.kanaClass][this.state.charGroup].jChar} className={this.state.imgItem}/>
        </div>
        <form onSubmit={this.handleGuess}>

          <input type="text"
                 placeholder="Enter your guess"
                 value={this.state.theGuess}
                 onChange={this.update("theGuess")}  />

               <button type="submit">Submit answer</button>
        </form>
        {this.handleMistake()}
        {this.arrowsShow()}
      </div>
    );
  }

}
