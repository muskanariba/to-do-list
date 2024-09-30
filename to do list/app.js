// function addTask() {
//     const task = document.getElementById("taskInput").value;
//   if(task==""){
//     alert("please enter task")
//     return
//   }

//     const li = document.createElement("li");
//     li.innerHTML = task + ' <button onclick="this.parentElement.remove()" class="delete" >Delete</button>';
//     document.getElementById("taskList").appendChild(li);
//     document.getElementById("taskInput").value = "";}

function addTask(){
const task = document.getElementById("taskInput").value;
if(task == ""){
    alert("please enter task")
        return
}
const li = document.createElement("li")
li.innerHTML = task + `<button onclick = this.parentElement.remove() class="delete" >Delete</button>`;
document.getElementById('taskList').appendChild(li)
document.getElementById("taskInput").value = "";
}