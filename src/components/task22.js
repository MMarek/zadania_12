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
                <div style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: this.state.color1
                }}></div>
                <div style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: this.state.color2
                }}></div>
                <div style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    backgroundColor: this.state.color3
                }}></div>
            </div>
        )
    }

    componentDidMount() {

        this.interval = setInterval(() => {
            if (this.state.light === 1) {
                this.setState({
                    color1: "red",
                    color2: "black",
                    color3: "black",
                    light: 2,
                    time: this.props.yellowTime
                })
            } else if (this.state.light === 2) {
                this.setState({
                    color1: "red",
                    color2: "yellow",
                    color3: "black",
                    light: 3,
                    time: this.props.greenTime
                })
            } else if (this.state.light === 3) {
                this.setState({
                    color1: "black",
                    color2: "black",
                    color3: "green",
                    light: 4,
                    time: this.props.yellowTime
                })
            } else {
                this.setState({
                    color1: "black",
                    color2: "yellow",
                    color3: "black",
                    light: 1,
                    time: this.props.redTime
                })
            }
        }, this.state.time);
    }

    componentWillUnmount() {
        clearTimeout(this.interval);
    }
}

function Task22() {
    return <TrafficLights redTime={1000} yellowTime={1000} greenTime={1000}/>
}

export default Task22;