import React, {Component} from "react";

class Div extends Component {
    state = {
        on: true
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                on: false,
            })
        }, 5000)
    }

    render() {
        const {on} = this.state;
        let style = {
            width: '100px',
            height: '100px',
            backgroundColor: on ? 'green' : 'red'
        };

        return(
            <div style={style}/>
        )
    }
}

function Task20() {
    return <Div/>
}

export default Task20;


