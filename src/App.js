
import './App.css';
import Home from './components/Home';
import MyNavBar from './components/MyNavBar'

function App() {
  return (
    <div className="App">
      <MyNavBar title="Striverestaurant"/>
      <Home/>
    </div>
  );
}

export default App;
