import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome firstName="John" lastName="Doe"/>
      <Greeting firstName="Maeva" lastName="Fortunal"/>
    </div>
  );
}

export default App;
