import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.newItemRef = React.createRef();
        this.state = {
            currentItem: {text:'', id:'', done:false},
            items: [{
                    id: 1,
                    text: 'Think about idea',
                    done: true
                }, {
                    id: 2,
                    text: 'Publish on Github',
                    done: true
                }, {
                    id: 3,
                    text: 'Add style',
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
                    text: 'Optimize for mobile view',
                    done: false
                }, {
                    id: 7,
                    text: 'Add PWA features',
                    done: false
                }, {
                    id: 8,
                    text: 'Complete this project',
                    done: false
                },
            ]
        }
    }

    componentDidMount() {
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

    editItem = (itemId) => {
        let items = this.state.items;
        items = items.map(item => {
            if (item.id === itemId) item.editable = !item.editable;
            return item;
        });
        this.setState({items});
    };

    activeEdit = (itemId, e) => {
        let text = e.target.value;
        let items = this.state.items;
        items = items.map(item => {
            if (item.id === itemId) item.text = text;
            return item;
        });
        this.setState({items});
    };


  render() {
    return (
        <div className="container">
            <TodoList
                items={this.state.items}
                newItemRef={this.newItemRef}
                currentItem={this.state.currentItem}
                handleItemChange={this.handleItemChange}
                addItem={this.addItem}
                doneItem={this.doneItem}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                activeEdit={this.activeEdit}
            />
        </div>
        );
    }
}

export default App;
