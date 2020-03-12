import React, {Component} from "react";

class PropsToState extends Component {
    state = {
        text: this.props.text
    };

    render() {
        return (
            <h1>
                <ShowInfo info={this.state.text} />
            </h1>
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(
                previous => ({
                    text: previous.text + "."}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}

class ShowInfo extends Component {
    render() {
        return <h1>{this.props.info}</h1>
    }
}

function Task23() {
    return <PropsToState text={"Kropki => "}/>
}

export default Task23;