import React, {Component} from "react";

class FormExample extends Component {
    state = {
        name: ""
    };

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.name);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Imię i nazwisko:
                    <input type="text"
                           name="name"
                           value={this.state.name}
                           onChange={this.handleNameChange}/>
                </label>
                <input type="submit" value="Wyślij"/>
            </form>
        );
    }
}

function Task09() {
    return <FormExample/>;
}

export default Task09;