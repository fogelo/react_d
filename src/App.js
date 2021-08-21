import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  );
}

export default App;