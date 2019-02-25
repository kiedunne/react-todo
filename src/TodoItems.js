import React, { Component } from 'react';

class TodoItems extends Component {

    createTasks = item => {
        return (
        <div className='eachNote'>
            <div key={item.key}>{item.text}</div>
            <button onClick={() => this.props.deleteItem(item.key) } className="btn btn-danger btn-sm m-2" type="submit">Delete</button>
        </div>)
    }
    render() {
        const todoEntries = this.props.entries 
        const listItems = todoEntries.map(this.createTasks)

        return <div
            className="theList">{listItems} 
        </div>
    }

}

export default TodoItems