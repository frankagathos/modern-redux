import './App.css';
import Msg from './components/Msg';
import Country from './components/Country';
import Theme from './components/Theme'
import Cat from './components/Cat';
function App() {
  return (
    <div className="App">
      <Msg />
      <hr></hr>
      <Country />
      <hr></hr>
      <Theme />
      <hr></hr>
      <Cat/>
    </div>
  );
}

export default App;
