import React from "react";

function ParentComponent(props) {
    return (
        <>
            <h3>Parent Component</h3>
            <ChildComponent>
                {props.children}
            </ChildComponent>
        </>
    )
}


function ChildComponent(props) {
    return  <>
        <h3>ChildComponent</h3>
        <GrandchildComponent>
            {props.children}
        </GrandchildComponent>

    </>
}

function GrandchildComponent(props) {
    return <>{props.children}</>
}

function ItsWorking(){
    return (
        <ParentComponent>
            <h1>To działa!</h1>
        </ParentComponent>
    )
}

function Task07() {
    return <ItsWorking/>
}

export default Task07;