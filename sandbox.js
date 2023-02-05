function addTask() {
    var task = document.getElementById("task").value;
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
  }
  function removeTasks() {
    var ul = document.getElementById("taskList");
    ul.innerHTML = "";
  }