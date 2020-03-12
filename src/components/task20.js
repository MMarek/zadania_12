import React, {Component} from "react";


// function UpperCaseText(props) {
//   return <h2>{props.text.toLocaleUpperCase()}</h2>;
// }

class UpperCaseText extends Component {
    // constructor(props) {
    //   super(props);

    render() {
        return <h2>{this.props.text.toLocaleUpperCase()}</h2>
    }
}

function Task20 (){
    return  <UpperCaseText text="Komponent zamieniający małe znaki na duże!"/>
}

export default Task20