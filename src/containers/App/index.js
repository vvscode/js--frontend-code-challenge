import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTeam, removeMember, fetchData } from "../../actions/teams";

import filterBy from "../../utils/filterBy";
import { TeamTable, TeamsSelector } from "../../components/Team";
import { EmployeeList } from "../../components/Employee";
import { Spinner } from "../../components/Loader";

class App extends Component {
  state = {
    isDataLoaded: false
  };

  componentDidMount() {
    this.props.fetchData().then(() => this.setState({ isDataLoaded: true }));
  }

  getTeams = () =>
    filterBy(this.props.teams, "selected").map(team => (
      <TeamTable
        team={team}
        onMemberRemove={member =>
          this.props.removeMember.bind(this, team, member)}
        className="team-table"
        key={team.id}
      />
    ));

  getTeamSelector = () => (
    <TeamsSelector
      teams={this.props.teams}
      selectTeam={this.props.selectTeam.bind(this)}
    />
  );

  getEmployeeList = () => <EmployeeList employees={this.props.employees} />;

  getLoadingState = () => <Spinner />;

  render() {
    if (!this.state.isDataLoaded) {
      return this.getLoadingState();
    }

    const teams = this.getTeams();

    return (
      <div className="App">
        <div className="App-header">
          <h2>Some unremarkable IT-Team</h2>
        </div>
        <div className="wrapper">
          <div className="teams-container">{teams}</div>
          <div className="tools">
            {this.getTeamSelector()} {this.getEmployeeList()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.data.teams,
  employees: state.data.employees
});

const mapDispatchToProps = dispatch => ({
  selectTeam: bindActionCreators(selectTeam, dispatch),
  removeMember: bindActionCreators(removeMember, dispatch),
  fetchData: bindActionCreators(fetchData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
