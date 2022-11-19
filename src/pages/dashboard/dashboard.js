import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import EmployeeDashboardComponent from '../../components/dashboards/employee.dashboard';
import CompanyDashboardComponent from '../../components/dashboards/company.dashboard';

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
    decoded_token.sub.isCompany ?

      this.setState({
        company: decoded_token.sub
      })
      :
      this.setState({
        employee: decoded_token.sub,
      })
  }
  render() {
    return (
      this.state.company !== {} ?
        <CompanyDashboardComponent company={this.state.company} />
        :
        <EmployeeDashboardComponent employee={this.state.employee} />
    )
  }
}
