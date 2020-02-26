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

        if (password.length <= 4) {
            errors.push('Password too short');
        }

        this.setState({errors})

        if (errors.length === 0) {
            this.login();
        }
    };

    login() {
        const {login, password} = this.state;
        FakeAPI.login({
            username: login,
            password: password
        }).then(user => {
            console.log(user);
        }).catch(err => {
            this.setState({errors: [err]});
        })
    }

    render() {
        const {user} = this.state;
        if (user) {
            return ()
        }
    }
}