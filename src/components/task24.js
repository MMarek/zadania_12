import React from "react";

function UserCard(props) {
    const {name, surname, address, postcode, city} = props;

    if ( name.length > 0 &&
        surname.length > 0 &&
        address.length > 0 &&
        city.length > 0 &&
        postcode.length >= 5 &&
        postcode.length <= 6) {

        return (
            <div>
                <div>
                    <h5>{name} {surname}</h5>
                    <div>{address}</div>
                    <div>{postcode} {city}</div>
                </div>
            </div>
        )

    } else {
        return (
            <div>
                Dane są nieprawidłowe!
            </div>
        )
    }
}

function Task24() {
    return (
        <UserCard name={"Jan"}
                  surname={"Kowalski"}
                  address={"Zielińskiego 20"}
                  postcode={"23-421"}
                  city={"Białogród"}/>
    )
}

export default Task24;
