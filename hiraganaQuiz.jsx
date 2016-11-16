

import React from 'react';
import ReactDOM from 'react-dom';

import Quizview from './QuizView';



class Root extends React.Component {
  render() {
    return(
      <div className="mainBox">
        <Quizview/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(<Root/>, document.getElementById('main'));

});
