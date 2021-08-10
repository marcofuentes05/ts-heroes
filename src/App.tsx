import logo from './logo.svg';
import HeroeList, {MyList} from './Components/List'


import './App.css';
const myHeroesList = new MyList()


function App() {
  return (
    <div className="App">
      <HeroeList listComponent={myHeroesList} />
    </div>
  );
}

myHeroesList.getHeroes();

export default App;
