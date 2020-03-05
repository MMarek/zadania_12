import React, {Component} from "react";

class TextField extends Component {
    // state = {
    //     option: ''
    // };

    // optionValue = (e) => {
    //     this.setState({
    //         option: e.target.value
    //     })
    // };

    render() {
        return (
            <div>
                {/*<p>{this.state.value}</p>*/}
                <select>
                    {/*<option {this.optionValue}>12345</option>*/}
                    <option>jeden</option>
                    <option>dwa</option>
                    <option>cztery</option>
                    <option>pięć</option>
                    <option>sześć</option>
                    <option>siedem</option>
                    <option>osiem</option>
                    <option>dziewięć</option>
                </select>
            </div>
        )
    }
}

function Task05() {
    return <TextField/>
}

export default Task05;