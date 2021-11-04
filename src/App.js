import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';

function App() {


  return (
    <div className="App">

    <Hello name="shahriar" age="60"></Hello>


    <Welcome name="babu"></Welcome>

    </div>
  );
}

export default App;
