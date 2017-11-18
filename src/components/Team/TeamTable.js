import React, { Component } from "react";
import { TeamEmployeesTable } from "../Employee";

const members = (team, onMemberRemove) => (
  <TeamEmployeesTable
    members={team.members}
    onRemove={onMemberRemove}
    className="table"
  />
);

class TeamTable extends Component {
  allowDrop = ev => ev.preventDefault();
  onDrop = ev => {
    ev.preventDefault();
    const employeeId = ev.dataTransfer.getData("employee-id");
    const { onDragEmployee = () => null } = this.props;
    onDragEmployee(employeeId);
  };
  render() {
    const { team, onMemberRemove, className } = this.props;
    return (
      <div
        className={className}
        onDrop={this.onDrop}
        onDragOver={this.allowDrop}
      >
        <h2>
          {team.name} ({team.members.length})
        </h2>
        {members(team, onMemberRemove)}
      </div>
    );
  }
}

export { TeamTable, members };
export default TeamTable;
