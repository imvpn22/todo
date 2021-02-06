import axios from 'axios';
import React, { Component } from 'react';
import TodoList from './TodoList';

// const API_BASE_URL = 'http://localhost:8000/api';
const API_BASE_URL = 'https://imvpn22-todo.herokuapp.com/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.newItemRef = React.createRef();
    this.state = {
      currentItem: {},
      items: []
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

    // call
    this.getTodosFromBackend();
  }

  addItem = text => {
    const newItem = { text };
    this.addTodoInBackend(newItem);

    const { items } = this.state;
    newItem._id = Date.now();
    items.push(newItem);
    this.setState({ items });
  };

  handleItemChange = text => {
    let currentItem = {
      text: text
    };
    this.setState({ currentItem });
  };

  doneItem = itemId => {
    let items = this.state.items;
    items = items.map(item => {
      if (itemId === item._id) {
        item.isDone = !item.isDone;
        this.updateTodoInBackend(item);
      }
      return item;
    });
    this.setState({ items });
    // this.updateLocalStorage(items);
  };

  deleteItem = itemId => {
    this.deleteTodoFromBackend(itemId);
    const items = this.state.items.filter(item => itemId !== item._id);
    this.setState({ items });
  };

  editItem = itemId => {
    let items = this.state.items;
    items = items.map(item => {
      if (item._id === itemId) item.editable = !item.editable;
      return item;
    });
    this.setState({ items });
    this.updateLocalStorage(items);
  };

  activeEdit = (itemId, e) => {
    let text = e.target.value;
    let items = this.state.items;
    items = items.map(item => {
      if (item._id === itemId) item.text = text;
      return item;
    });
    this.setState({ items });
    // this.updateLocalStorage(items);
  };

  updateLocalStorage = data => {
    localStorage.setItem('todos', JSON.stringify(data));
  };

  getTodosFromBackend = () => {
    axios
      .get(API_BASE_URL + '/todos')
      .then(res => {
        const { todos } = res.data;
        this.setState({ items: todos });
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateTodoInBackend = todo => {
    axios
      .put(API_BASE_URL + '/todos', todo)
      .then(res => {
        console.log(res);
        // const { todos } = res.data;
        // this.setState({ items: todos });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addTodoInBackend = data => {
    axios
      .post(API_BASE_URL + '/todos', data)
      .then(res => {
        this.getTodosFromBackend();
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteTodoFromBackend = todoId => {
    axios
      .delete(API_BASE_URL + '/todos/' + todoId)
      .then(res => {
        // console.log('delete success', res.data);
        this.getTodosFromBackend();
      })
      .catch(err => {
        console.log(err);
      });
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
