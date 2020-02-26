import React, {Component} from "react";
import FakeApi from "./data/fakeAPI";

class AccountData extends Component{
    state = {
        data:false
    };

    componentDidMount() {
        FakeApi.then(data => {
            this.setState({data})
        });
    }
    render() {
        if (this.state.data === false) {
            return null
        }

        return (
            <h1>Mam dane</h1>
        )
    }
}

function Task02() {
    return <AccountData/>
}

export default Task02