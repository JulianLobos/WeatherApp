import { ContextProvider } from './Context/Context';
import './App.css';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import Search from './Search/Search';


function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Navbar />
        <div className='mainContainer'>
          <Search />
          <Main />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
