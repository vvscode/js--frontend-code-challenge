import { members } from "../components/Team/index";

const initialState = {
  teams: [],
  positions: [],
  employees: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "DATA_FETCHED": {
      return {
        ...action.payload
      };
    }

    case "TEAM_SELECTED": {
      const teams = [...state.teams];
      teams.forEach(team => {
        team.selected =
          team.id === action.payload.id ? !team.selected : team.selected;
      });
      return { ...state, teams };
    }

    case "REMOVE_MEMBER": {
      const teams = [...state.teams];
      const team = teams.find(t => t.id === action.payload.team.id);
      const memberN = team.members.findIndex(
        m => m.id === action.payload.member.id
      );
      if (memberN !== -1) {
        team.members.splice(memberN, 1);
      }

      return { ...state, teams };
    }

    case "ADD_MEMBER": {
      const teams = [...state.teams];
      const team = teams.find(t => t.id === action.payload.team.id);
      if (
        !action.payload.member ||
        team.members.includes(action.payload.member)
      ) {
        return state;
      }
      team.members.unshift(action.payload.member);
      return { ...state, teams };
    }

    default:
      return state;
  }
}
