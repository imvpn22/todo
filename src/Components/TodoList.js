import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  updateCurrentText = e => {
    const inputText = e.target.value;
    this.setState({ inputText });
  };

  createTodoItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.inputText);
  };

  createItemHtml = item => (
    <TodoItem
      key={item._id}
      item={item}
      editItem={this.props.editItem}
      saveItem={this.props.saveItem}
      activeEdit={this.props.activeEdit}
      doneItem={this.props.doneItem}
      deleteItem={this.props.deleteItem}
    />
  );

  render() {
    const items = this.props.items;
    const listItems = items
      .filter(item => !item.isDone && !item.isDeleted)
      .map(item => this.createItemHtml(item));
    const doneItems = items
      .filter(item => item.isDone && !item.isDeleted)
      .map(item => this.createItemHtml(item));
    const deleteItems = items
      .filter(item => item.isDeleted)
      .map(item => this.createItemHtml(item));

    return (
      <div className="main">
        <div className="header">ToDo</div>
        <div className="itemList">
          {listItems}
          {doneItems}
          {/* <div class="divider" /> */}
          {deleteItems}
        </div>
        <div className="new-item item">
          <form onSubmit={this.createTodoItem}>
            <input
              ref={this.props.newItemRef}
              value={this.props.currentItem.text}
              onChange={e => this.updateCurrentText(e)}
              type="text"
              placeholder="Add new item"
              required
            />
            <button type="submit">
              <i className="fas fa-check" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
