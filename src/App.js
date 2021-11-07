import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContanier from './components/Dialogs/DialogsContanier';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import UsersContanier from './components/Users/UsersContanier';
import ProfileContanier from './components/Profile/ProfileContanier';
import HeaderContanier from './components/Header/HeaderContanier';


const App = (props) => {
  return (
    <div className="App-wrapper">
      <HeaderContanier></HeaderContanier>
      <Navbar></Navbar>
      <div className="App-wrapper-content">
        <Route path='/profile/:userId?' render={() => <ProfileContanier></ProfileContanier>}></Route>
        <Route path='/dialogs' render={() => <DialogsContanier></DialogsContanier>}></Route>
        <Route path='/news' component={News}></Route>
        <Route path='/music' component={Music}></Route>
        <Route path='/settings' component={Settings}></Route>
        <Route path='/users' render={() => <UsersContanier></UsersContanier>}></Route>
      </div>
    </div>
  );
}

export default App;