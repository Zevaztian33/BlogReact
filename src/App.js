import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Un blog con React y Bootstrap</h1>
        <Button href="/blogposts" className="App-btn" variant="outline-light">Entrar al Blog</Button>
      </header>
    </div>
  );
}

export default App;