import React, { Component } from "react";
import { addTask } from "../actions/actionTask";
import { connect } from "react-redux";

class AddItem extends Component {
  state = {
    myinput: ""
  };

  handlChange = e => {
    this.setState({
      myinput: e.target.value
    });
  };

  add = e => {
    e.preventDefault();
    this.props.addTask({
      text: this.state.myinput,
      key: Date.now(),
      checked: false,
      edit: false
    });
  };

  render() {
    return (
      <div class="d-flex justify-content-center">
        <div class="input-group mb-3 w-25">
          <input
            type="text"
            class="form-control"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={this.handlChange}
            value={this.state.myinput}
          />
          <div class="input-group-append">
            <button
              class="btn btn-success"
              type="button"
              id="button-addon2"
              onClick={this.add}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(AddItem);
