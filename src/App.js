import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';

function App() {
  return (
    <div className="App">

    <Hello name="shahriar" age="60"></Hello>
    <Hello name="Sha" age="80"></Hello>
    <Welcome></Welcome>

    </div>
  );
}

export default App;
