import React, { Component } from "react";
import { actGetKeyword } from "./modules/action";
import { connect } from "react-redux";

class Search extends Component {
  handleOnChange = (e) => {
    const { value } = e.target;
    this.props.getKeyword(value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-50"
        onChange={this.handleOnChange}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyword: (keyword) => {
      dispatch(actGetKeyword(keyword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
