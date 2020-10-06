// -------------------------- GLOBAL VARS -------------------------- //

let optionListLength = 2;
let varListLength = 1;
let optionListGlobal = [];
let varListGlobal = [];
let varListPriority = [];

// -------------------------- UTILS -------------------------- //

function getOptionListElement() {
  return document.getElementById("optionList");
}

function getVarListElement() {
  return document.getElementById("varList");
}

function getPriorityListElement() {
  return document.getElementById("varPriority");
}

function getValuesMatrix() {
  return document.getElementById("valuesMatrix");
}

function getStep(number) {
  return document.getElementById(`step${number}`);
}

function getLiOptions() {
  return document.getElementById("liOptions");
}

function getLiVars() {
  return document.getElementById("liVars");
}

function createDiv() {
  return document.createElement("div");
}

// function deleteInput(input) {
//   input.parentElement.parentElement.remove();
// }

// -------------------------- GENERAL FUNCTIONS -------------------------- //

function setInitialVisibility() {
  const step2 = 2;
  const lastStep = 4;
  for (let i = step2; i <= lastStep; i++) {
    getStep(i).style.display = "none";
  }
}

function makeVisibleStep(stepNumber) {
  const step1 = 1;
  const lastStep = 4;
  for (let i = step1; i <= lastStep; i++) {
    if (i === stepNumber) {
      getStep(i).style.display = "";
    } else {
      getStep(i).style.display = "none";
    }
  }
}

function addElement(element) {
  if (element === "option") {
    addOption(element);
  } else {
    addVar(element);
  }
}

function createLabel(element) {
  let label = document.createElement("label");
  label.className = "uk-form-label";
  if (element === "option") {
    label.innerText = "Opción " + optionListLength;
  } else {
    label.innerText = "Variable " + varListLength;
  }
  return label;
}

function createInput(element) {
  let div = createDiv();
  div.className = "uk-flex";
  let input = document.createElement("input");
  input.className = "uk-input";
  input.type = "text";
  if (element === "option") {
    input.placeholder = "Nombre de la opción";
  } else {
    input.placeholder = "Nombre de la variable";
  }
  div.appendChild(input);
  div.appendChild(createSpan());
  return div;
}

function createSpan() {
  let span = document.createElement("span");
  span.className = "uk-badge uk-button deleteInput";
  span.innerHTML = "-";
  span.addEventListener(onclick, function () {
    span.parentElement.parentElement.remove();
  });
  return span;
}

// -------------------------- OPTIONS -------------------------- //

function addOption(element) {
  optionListLength = optionListLength + 1;
  let optionList = getOptionListElement();
  optionList.appendChild(createContainer(element));
}

function setUpOptionList() {
  let optionList = getOptionListElement().children;
  for (const element of optionList) {
    optionListGlobal.push(element.children[1].lastElementChild.value);
  }
}

function createContainer(element) {
  let div = createDiv();
  div.className = "uk-form-controls";
  div.appendChild(createLabel(element));
  div.appendChild(createInput());
  return div;
}

// -------------------------- VARS -------------------------- //

function setUpVarList() {
  let varList = getVarListElement().children;
  for (const element of varList) {
    if (element.tagName == "DIV") {
      varListGlobal.push(element.children[1].lastElementChild.value);
    }
  }
  setUpPriorityList();
}

function addVar(element) {
  varListLength = varListLength + 1;
  let varList = getVarListElement();
  varList.appendChild(createLabel(element));
  varList.appendChild(createInput(element));
}

// -------------------------- PRIORITY LIST -------------------------- //

function setUpPriority() {
  let priorityList = getPriorityListElement().children;
  for (const priority of priorityList) {
    varListPriority.push(priority.children[0].innerText);
  }
}

function setUpPriorityList() {
  let priorityList = getPriorityListElement();

  for (let i = 0; i < varListGlobal.length; i++) {
    priorityList.appendChild(createPriorityElement(i));
  }
}

function createPriorityElement(i) {
  let div = createDiv();
  div.className = "uk-margin";
  let divElement = createDiv();
  divElement.className = "uk-card uk-card-primary uk-card-body uk-card-small";
  divElement.innerText = varListGlobal[i];
  div.appendChild(divElement);
  return div;
}

// -------------------------- VALUES -------------------------- //

function setValues() {
  setLiHead();
  setLiVars();
}

function setLiHead() {
  let liOptions = getLiOptions();
  optionListGlobal.forEach((option) => {
    liOptions.appendChild(createLiOption(option));
  });
}

function createLiOption(option) {
  let th = document.createElement("th");
  th.innerText = option;
  return th;
}

function setLiVars() {
  let liVars = getLiVars();
  varListPriority.forEach((varElement) => {
    liVars.appendChild(createRow(varElement));
  });
}

function createRow(varElement) {
  let tr = document.createElement("tr");
  tr.appendChild(createLiVar(varElement));
  optionListGlobal.forEach(() => {
    tr.appendChild(createSelectInput());
  });
  return tr;
}

function createLiVar(varElement) {
  let td = document.createElement("td");
  td.innerText = varElement;
  return td;
}

function createSelectInput() {
  let td = document.createElement("td");
  let div = createDiv();
  let select = document.createElement("select");
  for (let i = 0; i < optionListGlobal.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", i + 1);
    option.innerText = i + 1;
    select.appendChild(option);
  }
  div.appendChild(select);
  td.appendChild(div);
  return td;
}
