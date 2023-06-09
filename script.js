// Get the containers and items
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const items = document.querySelectorAll('.item');

// Add event listeners for drag and drop events
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
  item.setAttribute('draggable', 'true'); // Set draggable attribute to true
});

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);

// Drag and drop event handlers
function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  e.target.classList.add('dragged');
}

function dragEnd(e) {
  e.target.classList.remove('dragged');
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  container2.classList.add('drag-enter');
}

function dragLeave() {
  container2.classList.remove('drag-enter');
}

function drop(e) {
  e.preventDefault();
  const itemId = e.dataTransfer.getData('text/plain');
  const item = document.getElementById(itemId);
  container2.appendChild(item);
  container2.classList.remove('drag-enter');
  showSuccessMessage('Item dropped successfully!');
}

// Reset button event listener
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reset);

// Reset function
function reset() {
  container2.innerHTML = '';
  container1.append(...items);
}

// Show success message function
function showSuccessMessage(message) {
  const successMessage = document.createElement('p');
  successMessage.textContent = message;
  successMessage.classList.add('success-message');
  container2.insertAdjacentElement('afterend', successMessage);
  setTimeout(() => {
    successMessage.remove();
  }, 2000);
}
