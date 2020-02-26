import React, {Component} from "react";

class Hello extends Component{
    state = {
        name: ""
    };

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    render() {
        return (
            <>
                <h1>Hello {this.state.name}</h1>
                <input name='name' value={this.state.name} onChange={this.handleChangeName}/>
            </>
        );
    }
}

function Task03() {
    return <Hello/>
}

export default Task03;