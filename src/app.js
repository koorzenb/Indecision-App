import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/Indecision App';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class NewSyntax {
  name = 'Jen';
  getGreeting() {
    return `My name is ${this.name}`;
  }
}

const newSyntax = new NewSyntax();
newSyntax.getGreeting();
