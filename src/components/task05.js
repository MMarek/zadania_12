import React, {Component} from "react";


class ToDoList extends Component {
    state = {
        tasks: [],
        todo: ''
    };

    handleTodoChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let newTask = {
            id: nextId++,
            name: this.state.todo,
            done: false
        };
        let updatedTask = [...this.state.tasks, newTask]
        this.setState({
            tasks: updatedTask,
            todo: ''
        })
    };

    handleToggleDone = (id) => {
        let updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.done = !task.done;
            }
            return task;
        });
        this.setState({
            tasks: updatedTasks
        })
    };

    render() {
        return
    }
}


function Task05() {
    return <ToDoList/>
}

export default Task05