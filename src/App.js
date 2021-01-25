import React, { Component } from 'react';
import TodoList from './TodoList';

const DUMMY_DATA = [
  {
    id: 1,
    text: 'Dummy 1',
    done: true
  },
  {
    id: 8,
    text: 'Dummy 2',
    done: false
  }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.newItemRef = React.createRef();
    this.state = {
      currentItem: { text: '', id: '', done: false },
      items: DUMMY_DATA
    };
  }

  componentDidMount() {
    this.newItemRef.current.focus();
    const ls = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(ls);
    } catch (e) {
      console.log(e);
    }

    if (todos && todos.length) {
      this.setState({ items: todos });
    }
  }

  addItem = e => {
    e.preventDefault();
    let newItem = this.state.currentItem;
    if (!!newItem.text) {
      let items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: '', done: false }
      });
      this.updateLocalStorage(items);
    }
  };

  handleItemChange = e => {
    let text = e.target.value;
    let currentItem = {
      text: text,
      id: Date.now()
    };
    this.setState({ currentItem });
  };

  doneItem = itemId => {
    let items = this.state.items;
    items = items.map(item => {
      if (itemId === item.id) {
        item.done = !item.done;
      }
      return item;
    });
    this.setState({ items });
    this.updateLocalStorage(items);
  };

  deleteItem = itemId => {
    let items = this.state.items;
    items = items.filter(item => itemId !== item.id);
    this.setState({ items });
    this.updateLocalStorage(items);
  };

  editItem = itemId => {
    let items = this.state.items;
    items = items.map(item => {
      if (item.id === itemId) item.editable = !item.editable;
      return item;
    });
    this.setState({ items });
    this.updateLocalStorage(items);
  };

  activeEdit = (itemId, e) => {
    let text = e.target.value;
    let items = this.state.items;
    items = items.map(item => {
      if (item.id === itemId) item.text = text;
      return item;
    });
    this.setState({ items });
    this.updateLocalStorage(items);
  };

  updateLocalStorage = data => {
    localStorage.setItem('todos', JSON.stringify(data));
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
