import React from "react";

const TeamsSelector = ({ teams, selectTeam }) => (
  <div className="teams">
    <h3>Teams</h3>
    <ul className="list">
      {teams.map(team => (
        <li
          onClick={() => selectTeam(team)}
          className={`team-item ${team.selected ? "selected" : ""}`}
          key={team.id}
        >
          {team.name} ({team.members.length})
        </li>
      ))}
    </ul>
  </div>
);

export { TeamsSelector };
export default TeamsSelector;
