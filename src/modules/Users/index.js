import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { ALL_USERS } from '../../actions';

class Users extends Component {
  render() {
    return (
      <div>
        Users Module
        <ul>
          {
            this.props.users.map(user => (
              <li key={ user.id }>
                { user.name }
              </li>
            ))
          }
        </ul>
        <button onClick={() => this.props.ALL_USERS()}>Show Users</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = () => {
  return {
    ALL_USERS
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Users);
