import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import React from 'react';
import MainApp from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);            //монтируем в дивку
  ReactDOM.unmountComponentAtNode(div)      //демонтируем
});
