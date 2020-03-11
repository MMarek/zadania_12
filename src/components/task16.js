import React from "react";

function RandomNumbers(props) {
    const {min, max, count} = props;
    let array = [];
    for (let i = 0; i < count; i++) {
        const random = Math.floor(Math.random() * (max - min) + min);
        array.push(random)
    }
    return (
        <>
            <RandomNumbersInfo min={min} max={max} count={count}/>
            <RandomNumbersList numbersArray={array}/>
        </>
    )
}

function RandomNumbersInfo(props) {
    const {min, max, count} = props;
    return (
        <div>
            <p>min:{min}</p>
            <p>max:{max}</p>
            <p>count:{count}</p>
        </div>
    )
}

function RandomNumbersList(props) {
    const {numbersArray} = props;
    return (
        <ul>
            {numbersArray.map((el,index) => <li>{el}</li> )}
        </ul>
    )
}

function Task16() {
    return <RandomNumbers min={2} max={24} count={12}/>
}

export default Task16;