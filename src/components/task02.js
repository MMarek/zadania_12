import React, {Component} from "react";
import FakeApi from "./data/fakeAPI";

class AccountData extends Component {
    state = {
        data: false
    };

    componentDidMount() {
        FakeApi.then(response => {
            this.setState({
                data: response
            })
        });
    }

    render() {
        const {data} = this.state;
        if (!data) {
            return null;
        }

        return (
            <table>
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Change</th>
                    <th>Balance</th>
                </tr>
                </thead>
                <tbody>
                {data.map(el =>
                    <tr key={el.day}>
                        <td>{el.day}</td>
                        <td>{el.change}</td>
                        <td>{el.balance}</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}

function Task02() {
    return <AccountData/>
}

export default Task02