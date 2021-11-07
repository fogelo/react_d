import React from 'react'
import * as axios from 'axios'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUsersProfile } from './../../redux/profile-reducer'
import { withRouter } from 'react-router'


class ProfileContanier extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 20645
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContanierComponent = withRouter(ProfileContanier)

export default connect(mapStateToProps, { setUsersProfile })(WithUrlDataContanierComponent)