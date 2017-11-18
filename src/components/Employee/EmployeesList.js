import React from "react";

const EmployeesList = ({ members = [], onRemove, className }) => {
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
};

export { EmployeesList };
export default EmployeesList;
