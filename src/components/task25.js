import React, {Component} from "react";

class LoadingData extends Component {
    state = {
        progress: 0
    };

    componentDidMount() {
        let counter = 0;
        this.intervalId = setInterval(() => {
            this.setState({
                progress: counter++
            });
            if (this.state.progress === 100) {
                clearInterval(this.intervalId);
                this.state.progress = 100;
            }
        }, 100)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <>
                {
                    this.state.progress === 100 ?
                        <h1>Dane załadowane!</h1>
                        :
                        <div>
                            <div style={{width: this.state.progress + "%"}}></div>
                        </div>
                }
            </>
        );
    }
}

function Task25() {
    return <LoadingData/>
}


export default Task25;