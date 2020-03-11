import React, {Component} from "react";

class GivePassword extends Component{
    state = {
        loggedIn: false,
        errorMsg: null
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {pwd} = this.props;
        const pass = this.passwordField.value;
        if(pwd === pass){
            this.setState({
                loggedIn: true
            })
        }else{
            this.setState({
                errorMsg: "Wrong password"
            })
        }
    };

    render() {

        if(this.state.loggedIn) return <h1>Zgadłeś</h1>;
        return(
            <form onSubmit={this.handleSubmit}>
                {this.state.errorMsg && <span>{this.state.errorMsg}</span>}
                <input type="password"
                       ref={thisField => this.passwordField = thisField }
                       placeholder="Write your secret password"
                />
                <button>Login</button>
            </form>
        )
    }
}








//
// import React, {Component} from "react";
//
// class GivePassword extends Component {
//     state = {
//         loggedIn: false,
//         errorMsg: null
//     };
//
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const {pwd} = this.props;
//         const pass = this.passwordField.value;
//         if (pwd === pass){
//             this.setState({
//                 loggedOn: true
//             })
//         }else{
//             this.setState({
//                 errorMsg: 'Wrong password'
//             })
//         }
//     };
//
//     render() {
//
//         if(this.state.logedIn) return <h1>I'm in</h1>
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 {this.state.errorMsg && <span>{this.state.errorMsg}</span>}
//                 <input type="password"
//                        ref={thisField => this.passwordField = thisField }
//                        placeholder="Write your secret password"
//                 />
//                 <button>Login</button>
//             </form>
//         )
//     }
// }

function Task06 () {
    return <GivePassword pwd={"qwerty"} />
}

export default Task06;