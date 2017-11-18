import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTeam, removeMember, fetchData } from "../../actions/teams";

import filterBy from "../../utils/filterBy";
import { TeamTable, TeamsSelector } from "../../components/Team";
import { EmployeeList } from "../../components/Employee";

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  getTeams() {
    return filterBy(this.props.teams, "selected").map(team => (
      <TeamTable
        team={team}
        onMemberRemove={member =>
          this.props.removeMember.bind(this, team, member)}
        className="team-table"
        key={team.id}
      />
    ));
  }

  render() {
    const teams = this.getTeams();

    return (
      <div className="App">
        <div className="App-header">
          <h2>Some unremarkable IT-Team</h2>
        </div>
        <div className="wrapper">
          <div className="teams-container">{teams}</div>
          <div className="tools">
            <TeamsSelector
              teams={this.props.teams}
              selectTeam={this.props.selectTeam.bind(this)}
            />
            <EmployeeList employees={this.props.employees} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.data.teams,
    positions: state.data.positions,
    employees: state.data.employees
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTeam: bindActionCreators(selectTeam, dispatch),
    removeMember: bindActionCreators(removeMember, dispatch),
    fetchData: bindActionCreators(fetchData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
