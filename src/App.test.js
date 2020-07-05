
import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom';


describe('App.js Tests:', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
