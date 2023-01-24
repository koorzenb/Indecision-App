console.log('print me');

import React from 'react';
import ReactDOM from 'react-dom';

const template = React.createElement('p', {}, 'something');
ReactDOM.render(template, document.getElementById('app'));
