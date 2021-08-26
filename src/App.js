import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
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
          <Route path = '/profile' render = {() => <Profile addPost={props.addPost} posts={props.state.profilesPage.posts}></Profile>}></Route>
          <Route path = '/dialogs' render = {() => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}></Dialogs>}></Route>
          <Route path = '/news' component = {News}></Route>
          <Route path = '/music' component = {Music}></Route>
          <Route path = '/settings' component = {Settings}></Route>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;