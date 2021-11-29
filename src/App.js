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
import LoginPage from './components/Login/Login'
import { getAuthUserData } from './redux/auth-reducer'
import { connect } from 'react-redux';
import React from 'react';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      
      return <Preloader />
    }
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
          <Route path='/login' render={() => <LoginPage></LoginPage>}></Route>

        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return ({ initialized: state.app.initialized, })
}
export default connect(mapStateToProps, { initializeApp })(App);