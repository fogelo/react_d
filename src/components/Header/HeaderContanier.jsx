import React from "react";
import * as axios from 'axios'
import Header from "./Header";
import { getAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";

class HeaderContanier extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})
export default connect(mapStateToProps, { getAuthUserData })(HeaderContanier)