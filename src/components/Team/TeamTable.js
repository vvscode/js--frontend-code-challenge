import React from "react";
import { TeamEmployeesTable } from "../Employee";

const members = (team, onMemberRemove) => (
  <TeamEmployeesTable
    members={team.members}
    onRemove={onMemberRemove}
    className="table"
  />
);

const TeamTable = ({ team, onMemberRemove, className }) => {
  return (
    <div className={className}>
      <h2>
        {team.name} ({team.members.length})
      </h2>
      {members(team, onMemberRemove)}
    </div>
  );
};

export { TeamTable, members };
export default TeamTable;
