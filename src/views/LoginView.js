import React, { Component, PropTypes }     from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import {  hideLoadingScreen } from '../utils';
// Normally you'd import your action creators, but I don't want to create
// a file that you're just going to delete anyways!
const actionCreators = {
  increment : () => ({ type : 'COUNTER_INCREMENT' })
};

// We define mapStateToProps and mapDispatchToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter : state.counter,
  windows : state.windows
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});


export class LoginView extends Component {
  static propTypes = {
    actions  : PropTypes.object,
    counter  : PropTypes.number,
    windows  : PropTypes.object

  }


  constructor (props) {
    super(props);
    this.state = {};
    hideLoadingScreen();
  }

  componentDidMount() {
  }

  _checkAuth() {
    document.location.hash = '#/';
  }

  render () {
    return (
      <div id='loginScreen'>
        <div id="loginScreenWindow">
          Логин:
          <input type="" value="demo" />
          Пароль:
          <input type="" value="demo" />
          <br /><br />
          <button onClick={this._checkAuth}>Войти</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
