import './App.css';
import Msg from './components/Msg';
import Country from './components/Country';
import Theme from './components/Theme'
import Cat from './components/Cat';
import Users from './components/Users';
function App() {
  return (
    <div className="App">
      <Msg />
      <hr></hr>
      <Country />
      <hr></hr>
      <Theme />
      <hr></hr>
      <Cat />
      <hr></hr>
      <Users />
    </div>
  );
}

export default App;
