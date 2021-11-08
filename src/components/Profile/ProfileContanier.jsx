import React from 'react'
import { Redirect } from 'react-router'
import * as axios from 'axios'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUsersProfile } from './../../redux/profile-reducer'
import { withRouter } from 'react-router'
import { usersAPI } from '../../api/api'


class ProfileContanier extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 20645
    }
    this.props.getUsersProfile(userId)
  }


  render() {
    if(!this.props.isAuth) return <Redirect to={'/login'}/>;

    return (
      <Profile {...this.props} profile={this.props.profile}></Profile>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilesPage.profile,
  isAuth: state.auth.isAuth

})

let WithUrlDataContanierComponent = withRouter(ProfileContanier)

export default connect(mapStateToProps, { getUsersProfile })(WithUrlDataContanierComponent)