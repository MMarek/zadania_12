import React from "react";

let name = (prompt('Padaj imię: '));
let age = parseFloat(prompt('Podaj wiek: '));

function Task13() {
    return <>{name} ma {age} lat</>
}

export default Task13;