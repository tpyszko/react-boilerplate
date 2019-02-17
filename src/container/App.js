import React, { Component, Fragment } from "react";
import { H1 } from "../components/Text";
import { connect } from "react-redux";
import { handleLogin } from "../actions/index";

class App extends Component {
  render() {
    return (
      <Fragment>
        <H1>Hi from App!</H1>
        {this.props.logedIn ? <p>YES</p> : <p>NO </p>}
        <button onClick={() => this.props.dispatch(handleLogin())}>
          toggle Loged In
        </button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    logedIn: state.auth.isLogedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
