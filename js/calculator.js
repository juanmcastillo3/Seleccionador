let priorityPercentage = 0;
let indexsPriority = [];
let parts = [];
let valuesParts = [];

function calculate() {
  calculatePriorityPercentage();
  setIndexsPriority();
  setParts();
  setMatrixParts();
}

function calculatePriorityPercentage() {
  let rows = getRows();
  priorityPercentage = 100 / rows.length;
  console.log(priorityPercentage);
}

function getRows() {
  let liVars = document.getElementById("liVars");
  let rows = liVars.children;
  return rows;
}

function setIndexsPriority() {
  let rows = getRows();
  indexsPriority.push(100);
  for (let i = 1; i < rows.length; i++) {
    let priority = 100 - priorityPercentage * i;
    indexsPriority.push(priority);
  }
  console.log(indexsPriority);
}

function getOptionsLength() {
  return getRows()[0].children.length - 1;
}

function setParts() {
  for (let i = 0; i < getRows().length; i++) {
    let part = indexsPriority[i] / getOptionsLength();
    parts.push(part);
  }
  console.log(parts);
}

function setMatrixParts() {
  for (let i = 0; i < getOptionsLength(); i++) {
    let values = [];
    for (let j = 0; j < getRows().length; j++) {
      values[j] = parts[j] * (i + 1);
    }
    valuesParts.push(values);
  }
  console.log(valuesParts);
}
