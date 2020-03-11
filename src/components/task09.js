import React, {Component} from "react";

class FormExample extends Component {
    state = {
        name: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(`Nazwa: ${this.state.name}`);
        console.log(`Hasło: ${this.state.password}`);
    };

    render() {
        const {name, password} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       name="name"
                       value={name}
                       onChange={this.handleChange}/>


                <input type="password"
                       name="password"
                       value={password}
                       onChange={this.handleChange}/>

                <input type="submit" value="Wyślij"/>
            </form>
        );
    }
}

function Task09() {
    return <FormExample/>;
}

export default Task09;