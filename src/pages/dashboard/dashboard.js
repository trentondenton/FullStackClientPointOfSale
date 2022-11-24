import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import Loading from '../../components/loading/loading';
import EmployeeDashboardComponent from '../../components/dashboards/employee.dashboard';
import CompanyDashboardComponent from '../../components/dashboards/company.dashboard';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      employee: Object,
      company: Object,
      isLoading: true,
    }

    this.checkUser = this.checkUser.bind(this);
  }

  componentDidMount() {
    this.checkUser()
    this.setState({
      isLoading: false
    })
  }

  checkUser() {
    let decoded_token = jwt_decode(JSON.parse(localStorage.getItem('token')));
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
      this.state.isLoading ?
        <Loading />
        :
        this.state.company.isCompany ?
          <CompanyDashboardComponent company={this.state.company} />
          :
          <EmployeeDashboardComponent employee={this.state.employee} />
    )
  }
}
