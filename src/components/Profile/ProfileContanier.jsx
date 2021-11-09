import React from 'react'
import { Redirect } from 'react-router'
import * as axios from 'axios'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUsersProfile } from './../../redux/profile-reducer'
import { withRouter } from 'react-router'
import { usersAPI } from '../../api/api'
import {withAuthRedirect} from './../../hoc/withAuthRedirect'
import { compose } from 'redux'


class ProfileContanier extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 20645
    }
    this.props.getUsersProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}></Profile>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilesPage.profile,

})

export default compose(
  connect(mapStateToProps, { getUsersProfile }),
  withRouter,
  //withAuthRedirect
)(ProfileContanier)

