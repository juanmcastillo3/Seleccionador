// -------------------------- UTILS -------------------------- //

function getOptionListError() {
  return document.getElementById("optionsError");
}

function getVarListError() {
  return document.getElementById("varsError");
}

// -------------------------- VALIDATE -------------------------- //

function validator(site) {
  let valuesList;
  site === "options"
    ? (valuesList = getOptionListElement().children)
    : (valuesList = getVarListElement().children);
  let valuesLength = 0;
  let inputLength = 0;
  for (let i = 0; i < valuesList.length; i++) {
    let input = valuesList[i].lastElementChild.firstElementChild.value;
    inputLength++;
    if (input.length !== 0) valuesLength++;
  }

  if (inputLength !== valuesLength) {
    site === "options" ? showErrorInOptions() : showErrorInVars();
    showErrorInOptions();
  } else {
    runNextStepSite(site);
  }
}

// -------------------------- NEXTSTEPS -------------------------- //

function runNextStepSite(site) {
  switch (site) {
    case "options":
      setUpOptionList();
      makeVisibleStep(2);
      break;
    case "vars":
      setUpVarList();
      makeVisibleStep(3);
    default:
      break;
  }
}

// -------------------------- ERRORS -------------------------- //

function showErrorInOptions() {
  getOptionListError().hidden = false;
  getOptionListError().innerHTML = "No podés continuar con opciones vacías.";
}

function showErrorInVars() {
  getVarListError().hidden = false;
  getVarListError().innerHTML = "No podés continuar con variables vacías.";
}
