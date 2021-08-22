import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header></Header>
        <Navbar></Navbar>

        <div className="App-wrapper-content">
          <Route path = '/profile' component = {Profile}></Route>
          <Route path = '/dialogs' component = {Dialogs}></Route>
          <Route path = '/News' component = {News}></Route>
          <Route path = '/Music' component = {Music}></Route>
          <Route path = '/Settings' component = {Settings}></Route>

        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;