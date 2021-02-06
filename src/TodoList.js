import React, { Component } from 'react';

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

  createItemHtml = item => {
    if (item.editable) {
      return (
        <div
          className={'item ' + (item.isDone ? 'doneItem' : 'activeItem')}
          key={item._id}
        >
          <label>
            <i
              className={
                'far ' + (item.isDone ? 'fa-check-circle' : 'fa-circle')
              }
            />
            <input
              type="text"
              value={item.text}
              onChange={e => this.props.activeEdit(item._id, e)}
              autoFocus={true}
            />
          </label>
          <span>
            <button onClick={() => this.props.editItem(item._id)}>
              <i className="far fa-save" />
            </button>
            <button onClick={() => this.props.deleteItem(item._id)}>
              <i className="far fa-trash-alt" />
            </button>
          </span>
        </div>
      );
    } else {
      return (
        <div
          className={'item ' + (item.isDone ? 'doneItem' : 'activeItem')}
          key={item._id}
        >
          <label onClick={() => this.props.doneItem(item._id)}>
            <i
              className={
                'far ' + (item.isDone ? 'fa-check-circle' : 'fa-circle')
              }
            />
            <span>{item.text}</span>
          </label>
          <span>
            <button onClick={() => this.props.editItem(item._id)}>
              <i className="fas fa-pencil-alt" />
            </button>
            <button onClick={() => this.props.deleteItem(item._id)}>
              <i className="far fa-trash-alt" />
            </button>
          </span>
        </div>
      );
    }
  };

  render() {
    let items = this.props.items;
    let listItems = items
      .filter(item => !item.isDone)
      .map(item => this.createItemHtml(item));
    let doneItems = items
      .filter(item => item.isDone)
      .map(item => this.createItemHtml(item));

    return (
      <div className="main">
        <div className="header">ToDo</div>
        <div className="itemList">
          <form className="newItem item" onSubmit={this.createTodoItem}>
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
          {listItems}
          {doneItems}
        </div>
      </div>
    );
  }
}

export default TodoList;
