let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

function append(value) {
  currentDisplay += value;
  document.querySelector('#display').value = currentDisplay;
}

function calculate() {
  let result;
  try {
    result = Function('return ' + currentDisplay)();
    if (!isFinite(result)) {
      throw 'Infinity';
    }
  } catch (error) {
    result = 'Error';
  }
  document.querySelector('#display').value = result;
  currentDisplay = result.toString();
}

function clearAll() {
  currentDisplay = '';
  document.querySelector('#display').value = currentDisplay;
}

function deleteLast() {
  currentDisplay = currentDisplay.slice(0, -1);
  document.querySelector('#display').value = currentDisplay;
}
