

import React from 'react';
import ReactDOM from 'react-dom';

import Quizview from './QuizView';

import { Router, Route, Link } from 'react-router';






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
