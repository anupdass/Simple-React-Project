import logo from './logo.svg';
import './App.css';
import fakedata from './fakeData/playerinfo'
import Header from './components/Header/Header';
import DisplayPlayer from './components/Header/DisplayPlayer/DisplayPlayer';

function App() {
  return (
    <div >
      <Header/>
      <DisplayPlayer/>
    </div>
  );
}

export default App;
