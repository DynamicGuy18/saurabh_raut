// Function to handle the drag start event
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
  event.currentTarget.style.opacity = "0.5";
}

// Function to handle the drag end event
function dragEnd(event) {
  event.currentTarget.style.opacity = "1";
}

// Function to handle the drop event
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  var item = document.getElementById(data);
  event.target.appendChild(item);
  
  // Display success message
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  setTimeout(function() {
    successMessage.style.display = "none";
  }, 2000);
}

// Function to handle the drag over event
function allowDrop(event) {
  event.preventDefault();
}

// Function to reset the containers
function reset() {
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  container1.innerHTML = '<div class="item" draggable="true">Item 1</div><div class="item" draggable="true">Item 2</div><div class="item" draggable="true">Item 3</div>';
  container2.innerHTML = '';
}

// Add event listeners to the items
var items = document.getElementsByClassName("item");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("dragstart", dragStart);
  items[i].addEventListener("dragend", dragEnd);
}

// Add event listeners to the containers
var containers = document.getElementsByClassName("container");
for (var j = 0; j < containers.length; j++) {
  containers[j].addEventListener("drop", drop);
  containers[j].addEventListener("dragover", allowDrop);
}
