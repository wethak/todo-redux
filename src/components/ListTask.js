import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTask,
  completeTask,
  editTask,
  showTask
} from "../actions/actionTask";

class ListTask extends Component {
  state = {
    grabbedvalue: ""
  };

  render() {
    return (
        <div>
        {this.props.items.map(el => (
          <div key={el.key} class="d-flex justify-content-center">
            <div class="input-group mb-3 w-50">
              <div>
                <p className={el.checked ? "checked" : ""}>{el.text}</p>
              </div>

              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                    onClick={() => this.props.completeTask(el.key)}
                  />
                </div>
              </div>

              <div class="input-group-append">
                <button
                  class="btn btn-danger"
                  type="button"
                  id="button-addon2"
                  onClick={() => this.props.deleteTask(el.key)}
                >
                  Delete
                </button>
              </div>
              <div class="input-group-append">
                <button
                  class="btn btn-primary"
                  type="button"
                  id="button-addon2"
                  onClick={() => this.props.showTask(el.key)}
                >
                  Edit
                </button>
                <div className={el.edit ? "show" : "modal"}>
                  <div className="modif-bg">
                 
                    <input
                      type="text"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      onChange={e =>
                        this.setState({ grabbedValue: e.target.value })
                      }
                      defaultValue={el.text}
                    />
                    <button
                      class="btn btn-primary"
                      type="button"
                      onClick={() => {
                        this.props.editTask(this.state.grabbedValue, el.key);
                        this.props.showTask(el.key);
                        this.setState({
                          grabbedValue: ""
                        });
                      }}
                    >
                      Save
                    </button>
                    <button
                      class="btn btn-secondary"
                      type="button"
                      onClick={() => {
                        this.props.showTask(el.key);
                      }}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { items: state };
};

const mapDispatchToProps = {
  deleteTask,
  completeTask,
  editTask,
  showTask
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);
