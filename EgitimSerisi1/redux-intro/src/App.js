import './App.css';
import Counter from "./components/Counter";
import IncreaseTwoCounter from './components/IncreaseTwoCounter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
function App() {
  return (
    <div>
      <Counter></Counter>
      <IncreaseCounter></IncreaseCounter>
      <DecreaseCounter></DecreaseCounter>
      <IncreaseTwoCounter></IncreaseTwoCounter>
      
    </div>
  );
}

export default App;
