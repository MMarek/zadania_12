import React, {Component} from "react";

class SecretStuff extends Component{

    render() {
        const {password, correctPassword, secret} = this.props;
        if (password !== correctPassword){
            return null;
        }
        return <h1>{secret}</h1>
    }
}

function Task01() {
    return <SecretStuff password={'123'} correctPassword={'123'} secret={'Zgadłeś hasło'}/>
}

export default Task01;