import './App.css';
// import Employee from './components/Employee';
import EventHandling from './components/EventHandling';
/* import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
// Named Export
import { 
  FirstComponent,
  SecondComponent  as SC
} from './components/MyComponents';
// Default Export
import ThirdComponent from './components/MyComponents';
import FC from './components/FourthComponent';
import HelloWorld from './components/HelloWorld'; */
/* import Student from './components/Student';
import User from './components/User'; */

function App() {
  /* const student1 = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com"
  }

  const student2 = {
    firstName: "Irineva",
    lastName: "Borovitch",
    email: "irinevaborovitch@gmail.com"
  }

  const skills = ["Java", "Spring", "React"] */

  return (
    <div className="App">
      {/* <Welcome firstName="John" lastName="Doe"/>
      <Greeting firstName="Maeva" lastName="Fortunal"/>
      <FirstComponent />
      <SC />
      <ThirdComponent />
      <FC />
      <HelloWorld /> */}
      {/* <Student student={student1} skills={skills[0] + skills[1]}/>
      <Student student={student2} skills={skills[2]}/> */}
      {/* <Student skills={skills}/> */}
      {/* <Student firstName="John" lastName="Doe" email="johndoe@gmail.com"/> */}
      {/* <Employee /> */}
      {/* <User /> */}
      <EventHandling />
    </div>
  );
}

export default App;
