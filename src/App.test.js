import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

function App() {
  const isBackgroundRed = true;
  
  return (
    <div className={isBackgroundRed ? 'background-red' : 'background-blue'} />
  );
}

export default App;