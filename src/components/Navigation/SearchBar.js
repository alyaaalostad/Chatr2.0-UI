import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import * as actionCreators from "../../redux/actions/index";

class SearchBar extends Component {
  render() {
    return (
      <div className="form-group col-12">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={event => this.props.filterChannels(event.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterChannels: query => dispatch(actionCreators.filterChannels(query))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
