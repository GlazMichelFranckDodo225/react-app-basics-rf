import './App.css';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
// Named Export
import { 
  FirstComponent,
  SecondComponent  as SC
} from './components/MyComponents';
// Default Export
import ThirdComponent from './components/MyComponents';
import FC from './components/FourthComponent';

function App() {
  return (
    <div className="App">
      <Welcome firstName="John" lastName="Doe"/>
      <Greeting firstName="Maeva" lastName="Fortunal"/>
      <FirstComponent />
      <SC />
      <ThirdComponent />
      <FC />
    </div>
  );
}

export default App;
