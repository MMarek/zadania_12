import React, {Component} from "react";
import Task01 from "./task01";
import Task02 from "./task02";
import Task03 from "./task03";

class Home extends Component{

    render() {
        return (
            <>
             <Task01/>
             <Task02/>
             <Task03/>
            </>
        );
    }
}

export default Home;