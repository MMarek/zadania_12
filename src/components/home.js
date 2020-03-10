import React, {Component} from "react";
import Task01 from "./task01";
import Task02 from "./task02";
import Task03 from "./task03";
import Task04 from "./task04";
// import Task05 from "./task05";
// import Task06 from "./task06";

class Home extends Component{

    render() {
        return (
            <>
             <Task01/>
             <Task02/>
             <Task03/>
             <Task04/>
             {/*<Task05/>*/}
             {/*<Task06/>*/}
            </>
        );
    }
}

export default Home;