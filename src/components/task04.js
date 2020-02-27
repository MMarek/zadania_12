import React, {Component} from "react";
import FakeAPI from "./data/fakeAPIpeople";

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

    handleSubmitForm = e => {
        e.preventDefault();
        const {login, password} = this.state;
        let errors = [];
        if (login.length <= 2) {
            errors.push('Login too short');
        }

        if (password.length <= 4) {
            errors.push('Password too short');
        }

        this.setState({errors});

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

        let errorsJsx = null;
        if (this.state.errors.length) {
            errorsJsx = <ul>{this.state.errors.map((el, i) =>
                <li key={i}>{el}</li>
            )}
            </ul>
        }

        return (
            <form style={style} method="POST" onSubmit={this.handleSubmitForm}>
                {errorsJsx}
                <label>Login</label>
                <input type='text'
                       name='login'
                       value={this.state.login}
                       onChange={this.handlChangeLogin}/>
                <label>Password</label>

                <input type='password'
                       name='password'
                       value={this.state.login}
                       onChange={this.handleChangePassword}/>

                <input type='submit' value='Zaloguj'/>
            </form>
        )
    }
}

function Task04() {
    return <Login/>
}

export default Task04;