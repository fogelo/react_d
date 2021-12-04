import './App.css';
import Navbar from './components/Navbar/Navbar';
// import DialogsContanier from './components/Dialogs/DialogsContanier';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { HashRouter, Route } from 'react-router-dom';
import UsersContanier from './components/Users/UsersContanier';
// import ProfileContanier from './components/Profile/ProfileContanier';
import HeaderContanier from './components/Header/HeaderContanier';
import LoginPage from './components/Login/Login'
import { connect } from 'react-redux';
import React from 'react';
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from "react-router";
import store from './redux/redux-store'
import { Provider } from 'react-redux';
import { Suspense } from 'react';

// В итоговый bundle DialogsContanier и ProfileContanier не попадут, загрузятся по дополнительному запросу (будет несколько бандлов)
const DialogsContanier = React.lazy(() => import('./components/Dialogs/DialogsContanier'));
const ProfileContanier = React.lazy(() => import('./components/Profile/ProfileContanier'));



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


          <Route path='/profile/:userId?' render={() => {
            return <Suspense fallback={<div>Loading...</div>}>
              <ProfileContanier />
            </Suspense>
          }}></Route>

          <Route path='/dialogs' render={() => {
            return <Suspense fallback={<div>Loading...</div>}>
              <DialogsContanier />
            </Suspense>
          }}></Route>

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

let AppContanier = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

let MainApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      {/* <React.StrictMode> */}
      <AppContanier />
      {/* </React.StrictMode> */}
    </Provider>
  </HashRouter>
}

export default MainApp