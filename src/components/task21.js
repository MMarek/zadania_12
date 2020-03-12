import React, {Component} from "react";

class AnotherColor extends Component {
    state = {
        color: 'yellow'
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                color: 'red',
            })
        }, 8000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render() {
        const {color} = this.state;
        let style = {
            width: '300px',
            height: '100px',
            backgroundColor: color
        };
        return(
            <div style={style}/>
        )
    }
}

function Task21() {
    return <AnotherColor/>
}

export default Task21;