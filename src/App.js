import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContanier from './components/Dialogs/DialogsContanier';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header></Header>
        <Navbar></Navbar>
        <div className="App-wrapper-content">
          <Route path='/profile' render={() => <Profile store={props.store}></Profile>}></Route>
          <Route path='/dialogs' render={() => <DialogsContanier store={props.store}></DialogsContanier>}></Route>
          <Route path='/news' component={News}></Route>
          <Route path='/music' component={Music}></Route>
          <Route path='/settings' component={Settings}></Route>
        </div>
      </div>
      
    </BrowserRouter>

  );
}

export default App;