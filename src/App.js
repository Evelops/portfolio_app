import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TopContent from './TopContent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation/>
      </header>
        <Container fluid>
          <Row>
            <TopContent/>
          </Row>
        </Container>
    
    </div>
  );
}

export default App;
