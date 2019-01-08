import React, { Component } from 'react';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            items: [{
                    id: 1,
                    text: 'Complete this project kshkjdshfkjdhfkhthis project kshkjdshfkjdhfkhthis project kshkjdshfkjdhfkhthis project kshkjdshfkjdhfkh',
                    done: false
                }, {
                    id: 2,
                    text: 'Push on Github',
                    done: false
                }, {
                    id: 3,
                    text: 'Think about idea',
                    done: true
                }, {
                    id: 4,
                    text: 'What to do',
                    done: true
                }, {
                    id: 5,
                    text: 'What to do',
                    done: true
                }, {
                    id: 6,
                    text: 'What to do',
                    done: true
                }
            ]
        }
    }

    markDone = (itemId) => {
        let items = this.state.items;
        items = items.map(item => {
            if (itemId = item.id) {
                item.done = true;
            }
            return item;
        });
        this.setState({items});
    }


    render() {


        let items = this.state.items;
        let listItems = items.filter(item => !item.done).map(item => {
            return <div className="item activeItem" key={item.id}>
                <label>
                    <input type="checkbox" />
                    <span>{item.text}</span>
                </label>
                <span>
                    <button>Edit</button>
                    <button>Delete</button>
                </span>
            </div>
        })
        let doneItems = items.filter(item => item.done).map(item => {
            return <div className="item doneItem" key={item.id}>
                <label>
                    <input type="checkbox" checked={item.done}/>
                    <span>{item.text}</span>
                </label>
                <span>
                    <button>Edit</button>
                    <button>Delete</button>
                </span>
            </div>
        })

        return (
            <div className = "main">
                <div className="header">
                    <h2>ToDo App</h2>
                </div>
                <div className="itemList">
                    <h3>Add Item</h3>
                    <div className="newItem item">
                        <input type="text" placeholder="Add new item..." required />
                        <button type="submit">Add</button>
                    </div>
                </div>
                <div className="itemList">
                    <h3>TODO</h3>
                    {listItems}
                </div>
                <div className="itemList">
                    <h3>Completed</h3>
                    {doneItems}
                </div>
            </div>
        )
    }
}

export default TodoList
