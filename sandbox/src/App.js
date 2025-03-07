import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState('option1');
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div style={{ margin: '20px 0' }}>
          <label htmlFor="options" style={{ display: 'block', marginBottom: '10px' }}>
            Select an option:
          </label>
          <select 
            id="options" 
            value={selectedOption} 
            onChange={handleChange}
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              backgroundColor: 'white',
              color: '#333',
              minWidth: '200px'
            }}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <p style={{ marginTop: '10px' }}>
            You selected: {selectedOption}
          </p>
        </div>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
