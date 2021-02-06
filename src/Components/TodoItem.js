import React, { Component } from 'react';

class TodoItem extends Component {
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

  render() {
    const { item } = this.props;

    return (
      <div
        className={
          'item ' +
          (item.isDone ? 'done-item ' : 'active-item ') +
          (item.isDeleted ? ' deleted-item ' : '')
        }
        key={item._id}
      >
        <label>
          <button
            onClick={() => this.props.doneItem(item)}
            className="tick-btn"
            disabled={item.isDeleted}
          >
            <i
              className={
                'far ' + (item.isDone ? 'fa-check-circle' : 'fa-circle')
              }
            />
          </button>

          {item.editable ? (
            <input
              type="text"
              value={item.text}
              onChange={e => this.props.activeEdit(item._id, e)}
              autoFocus={true}
            />
          ) : (
            <span>{item.text}</span>
          )}
        </label>
        <span>
          {item.editable ? (
            <button onClick={() => this.props.saveItem(item)}>
              <i className="far fa-save" />
            </button>
          ) : (
            <button
              onClick={() => this.props.editItem(item._id)}
              disabled={item.isDeleted}
            >
              <i className="fas fa-pencil-alt" />
            </button>
          )}

          <button
            className="delete-btn"
            onClick={() => this.props.deleteItem(item)}
            disabled={item.isDeleted}
          >
            <i className="far fa-trash-alt" />
          </button>
        </span>
      </div>
    );
  }
}

export default TodoItem;
