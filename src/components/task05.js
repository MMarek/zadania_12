import React, {Component} from "react";

let data = ['BMW', 'JAGUAR', 'PORSHE'];

class SelectOrType extends Component {
    state = {
        option: [...this.props.items, 'inne'],
        car: this.props.items[0],
        other: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleAddClick = (e) => {
        let newOptions = [...this.state.options];
        newOptions[newOptions.length - 1] = this.state.other;
        this.setState({
            options:newOptions,
            car: this.state.other
        })
    };

    render() {
        return (
            <>
                </>
        )
    }
}

function Task05() {
    return SelectOrType
}

export default Task05;