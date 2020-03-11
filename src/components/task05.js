import React, {Component} from "react";


class ToDoList extends Component {
    state = {
        tasks: [],
        todo: ''
    };

    // nextTaskId = 1;

    handleTodoChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let newTask = {
            // id: nextId ++,
            name: this.state.todo,
            done: false
        };
        let updatedTask = [...this.state.tasks, newTask];
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Twoja lista zadań</h2>
                    <input type='text'
                           name='todo'
                           placeholder='np. Zrobić zakupy'
                           value={this.state.todo}
                           onChange={this.handleTodoChange}
                    />
                    <button>Dodaj</button>
                </form>
                <ul>
                    {this.state.tasks.map(task =>
                    <li key={task} //?
                        className={task.done ? 'done' : null}
                        onClick={e => this.handleToggleDone(task)}
                    >
                        {task.name}
                    </li>
                    )}
                </ul>
            </div>
        );
    }
}

function Task05() {
    return <ToDoList/>
}

export default Task05;