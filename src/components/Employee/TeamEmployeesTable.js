import React, { Component } from "react";

class TeamEmployeesTable extends Component {
  render() {
    const { members = [], onRemove, className } = this.props;
    return (
      <div className={className}>
        {members.map(member => (
          <div key={member.id} className="table__row">
            <div className="table__cell">{member.name}</div>
            <div className="table__cell fixed">{member.position.name}</div>
            <div className="table__cell fixed">
              <button onClick={onRemove(member)}>X</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export { TeamEmployeesTable };
export default TeamEmployeesTable;
