import { Firstpage } from './MyComponents/FirstPage/Firstpage';
import './App.css';
import { Secondpage } from './MyComponents/SecondPage/Secondpage';
import { Question } from './MyComponents/LastPage/Question';
import { Bottomfooter } from './MyComponents/Footer/Bottomfooter';



function App() {
  return (
    <div className="App">
    <Firstpage/>
    <Secondpage/>
    <Question/>
    <Bottomfooter/>
   
    
    </div>
  );
}

export default App;
