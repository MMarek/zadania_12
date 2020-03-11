import React, {Component} from "react";

class ShowMore extends Component{
    state = {
        show: false
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({show: true});
    };

    render() {
        if(this.state.show) return <>{this.props.children}</>;

        return <a href="#" onClick={this.handleClick}>Show more</a>
    }
}

function Task08(){
    return (
        <ShowMore>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis enim eget iaculis fermentum. Nulla facilisi. Morbi auctor quis leo ut efficitur. Duis a nulla sed nunc vestibulum condimentum ac vitae lorem. Vestibulum at ornare lacus, in euismod diam. Fusce varius, justo convallis varius elementum, quam felis molestie purus, accumsan imperdiet lacus nulla sed nunc. Suspendisse efficitur risus vel ante pharetra cursus.</p>
        </ShowMore>
    )
}

export default Task08;