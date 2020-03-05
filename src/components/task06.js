import React, {Component} from "react";

function SearchBox() {
    return (
        <section>
            <input type='search'/>
            <button>Wyszukaj</button>
        </section>
    );
}

// class SearchForm extends Component {
//     render() {
//         return (
        {/*<section>*/}
        {/*    <input type={search}/>*/}
        {/*    <button>Wyszukaj</button>*/}
        // </section>
        // )
    // }
// }


// class AddTwoNumbers extends Component {
//     state = {
//         inputA: '',
//         inputB: ''
//     };
//
//     addValue1 = () => {
//         this.setState({
//             inputA: this.state.inputA
//         })
//     };
//
//     addValue2 = () => {
//         this.setState({
//             inputB: this.state.inputB
//         })
//     };
//
//     render() {
//         return(
//             <form>
//                 <input>liczba 1</input>
//                 <input>liczba 2</input>
//                 <h1>{this.state.value}</h1>
//             </form>
//         )
//     }
// }


function Task06() {
    return <SearchBox/>
}

export default Task06;