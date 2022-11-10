import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import EmployeeDashboardComponent from '../../components/dashboards/employee.dashboard';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      employee: {},
      company: {}
    }

    this.checkUser = this.checkUser.bind(this);
  }

  componentDidMount() {
    this.checkUser();
  }

  checkUser() {
    let decoded_token = jwt_decode(localStorage.getItem('token'));
    this.setState({
      employee: decoded_token.sub,
    })
  }
  render() {
    return (
      <EmployeeDashboardComponent props={this.state.employee} />
    )
  }
}
