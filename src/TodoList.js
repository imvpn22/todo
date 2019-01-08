import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.newItemRef = React.createRef();
        this.state = {
            currentItem: {text:'', id:'', done:false},
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

    componentDidUpdate() {
        this.newItemRef.current.focus()
    }

    addItem = (e) => {
        e.preventDefault();
        let newItem = this.state.currentItem;
        if (!!newItem.text) {
            let items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: { text: '', key: '', done:false }
            });
            // this.newItemRef.clear();
        }

    };

    handleItemChange = e => {
        let text = e.target.value;
        let currentItem = {
            text: text,
            id: Date.now()
        };
        this.setState({currentItem});
    };

    doneItem = (itemId) => {
        let items = this.state.items;
        items = items.map(item => {
            if (itemId === item.id) {
                item.done = !item.done;
            }
            return item;
        });
        this.setState({items});
    };

    deleteItem = (itemId) => {
        let items = this.state.items;
        items = items.filter(item => itemId !== item.id);
        this.setState({items});
    };

    createItem = (item) => {
        return <div className={"item " + (item.done ? "doneItem" : "activeItem")} key={item.id}>
                <label onClick={() => this.doneItem(item.id)}>
                    <i className={"far " + (item.done ? "fa-check-circle" : "fa-circle")}></i>
                    <span>{item.text}</span>
                </label>
                <span>
                    <button><i className="fas fa-pencil-alt"></i></button>
                    <button onClick={() => this.deleteItem(item.id)}><i className="far fa-trash-alt"></i></button>
                </span>
            </div>
    }

    render() {

        let items = this.state.items;
        let listItems = items.filter(item => !item.done).map(item => this.createItem(item));
        let doneItems = items.filter(item => item.done).map(item => this.createItem(item));

        return (
            <div className = "main">
                <div className="header">
                    <h2>ToDo App</h2>
                </div>
                <div className="itemList">
                    <h3>Add Item</h3>
                    <form className="newItem item" onSubmit={e => this.addItem(e)}>
                        <input ref={this.newItemRef} onChange={e => this.handleItemChange(e)} type="text" placeholder="Add new item..." required />
                        <button type="submit">Add</button>
                    </form>
                </div>
                <div className="itemList">
                    *<h3>TODO</h3>
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
