import React, {Component} from "react";

class Login extends Component {
    state = {
        login: "",
        password: "",
        errors: [],
        user: null
    };

    handlChangeLogin = (e) => {
        this.setState({
            login: e.target.value
        })
    };

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        const {login, password} = this.state;
        let errors = [];
        if (login.length <= 2) {
            errors.push('Login too short');
        }
    }
}