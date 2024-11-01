import logo from './holberton-logo.jpg';
import { getFooterCopy, getFullYear } from './utils';
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} alt="hloberton-logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </>
  );
}

export default App;
