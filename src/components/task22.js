import React, {Component} from "react";

class TrafficLights extends Component {
    state = {
        light: 1,
        color1: "red",
        color2: "black",
        color3: "black",
        time: this.props.redTime
    };

    render() {
        return (
            <div>

            </div>
        )

    }

    componentDidMount() {

        this.interval = setInterval(() => {
            if (this.state.light === 1) {
                this.setState({
                })
            } else if (this.state.light === 2) {
                this.setState({
                })
            } else if (this.state.light === 3) {
                this.setState({
                })
            } else {
                this.setState({
                })
            }
        }, this.state.time);
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }
}

function Task22() {
    return <TrafficLights/>
}

export default Task22;