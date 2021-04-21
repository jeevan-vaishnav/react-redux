import logo from './logo.svg';
import './App.css';
// import Home from './components/Home';
import HomeContainer from './containers/HomeContainer';
// import User from './User';

function App() {
  return (
    <div className="App">
    {/* <User data= {{name:"Jeevan Vaishnav",age:25}}/> */}

    {/* <Home/> */}
    <HomeContainer/>

    </div>
  );
}

export default App;
