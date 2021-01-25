import React, { Component } from 'react';

class TodoList extends Component {
  createItem = item => {
    if (item.editable) {
      return (
        <div
          className={'item ' + (item.done ? 'doneItem' : 'activeItem')}
          key={item.id}
        >
          <label>
            <i
              className={'far ' + (item.done ? 'fa-check-circle' : 'fa-circle')}
            />
            <input
              type="text"
              value={item.text}
              onChange={e => this.props.activeEdit(item.id, e)}
              autoFocus={true}
            />
          </label>
          <span>
            <button onClick={() => this.props.editItem(item.id)}>
              <i className="far fa-save" />
            </button>
            <button onClick={() => this.props.deleteItem(item.id)}>
              <i className="far fa-trash-alt" />
            </button>
          </span>
        </div>
      );
    } else {
      return (
        <div
          className={'item ' + (item.done ? 'doneItem' : 'activeItem')}
          key={item.id}
        >
          <label onClick={() => this.props.doneItem(item.id)}>
            <i
              className={'far ' + (item.done ? 'fa-check-circle' : 'fa-circle')}
            />
            <span>{item.text}</span>
          </label>
          <span>
            <button onClick={() => this.props.editItem(item.id)}>
              <i className="fas fa-pencil-alt" />
            </button>
            <button onClick={() => this.props.deleteItem(item.id)}>
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
      .filter(item => !item.done)
      .map(item => this.createItem(item));
    let doneItems = items
      .filter(item => item.done)
      .map(item => this.createItem(item));

    return (
      <div className="main">
        <div className="header">ToDo</div>
        <div className="itemList">
          <form className="newItem item" onSubmit={e => this.props.addItem(e)}>
            <input
              ref={this.props.newItemRef}
              value={this.props.currentItem.text}
              onChange={e => this.props.handleItemChange(e)}
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
