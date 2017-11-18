export default store => next => action => {
  if (action.type === "TEAM_SELECTED") {
    updateSelectedTeamsToUrl(action.payload.name, action.payload.selected);
  }
  if (action.type === "DATA_FETCHED") {
    updateSelectedTeamsFromUrl(action.payload.teams);
  }
  console.log("Middleware triggered:", action, store.getState());
  next(action);
};

function getListFromHash() {
  let list = [];
  try {
    list = JSON.parse(window.location.hash.replace("#", ""));
  } catch (e) {}
  return list;
}

function updateSelectedTeamsToUrl(name, add) {
  let list = getListFromHash();
  if (add) {
    if (!list.includes(name)) {
      list.push(name);
    }
  } else {
    list = list.filter(i => i !== name);
  }
  window.location.hash = JSON.stringify(list);
}

function updateSelectedTeamsFromUrl(teams) {
  let list = getListFromHash();
  if (list.length) {
    teams.filter(t => list.includes(t.name)).forEach(t => (t.selected = false));
  }
}
