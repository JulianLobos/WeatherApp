import './App.css';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Main />
    </div>
  );
}

export default App;
