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
            return (
                <>
                    <h1>Witaj {user.name} {user.surname}</h1>
                    <p>Ostatnie logowanie: {user.lastLogin.toLocalDateString()}</p>
                </>
            )
        }

        let style = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px auto',
            background: 'lightblue',
            width: '400px',
            border: '1px solid #ddd',
            padding: '20px',
            boxSizing: 'border-box'
        };

        return (
            <form style={style} method="POST" onSubmit={this.handleSubmitForm}>
                <label>Login</label>
                <input/>
                <label>Password</label>

                <input/>

                <input/>
            </form>
        )
    }
}

function Task04() {
    return <Login/>
}

export default Task04;