import React from 'react'
import * as axios from 'axios'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUsersProfile } from './../../redux/profile-reducer'


class ProfileContanier extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUsersProfile(response.data)
      })
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}></Profile>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilesPage.profile
})

export default connect(mapStateToProps, { setUsersProfile })(ProfileContanier)