import React from 'react';
import ReactDOM from 'react-dom';

import Title from './Title.jsx';

describe('App.js Tests:', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Title />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  
});
