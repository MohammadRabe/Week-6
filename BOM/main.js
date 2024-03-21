let tasksList = document.querySelector(".tasks");
let addBtn = document.querySelector(".add-button");
let inputField = document.querySelector(".input-field");

document.forms[0].onsubmit = function(e){
    e.preventDefault();
}

// store tasks array in location Storage

var storedTasks = [];
addBtn.onclick = addTask;

// what happen when click

function addTask(){
    let inputValue = inputField.value;
    if(inputField.value !== ""){
        let task = document.createElement("div");
        task.classList.add("task");
        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-button");

        // append elements
        tasksList.style.transitionDuration = `2s`;
        deleteBtn.append("Delete");
        task.prepend(inputField.value);
        task.appendChild(deleteBtn);
        tasksList.appendChild(task);

        // save in location Storage

        storedTasks.push(inputValue);
        localStorage.setItem("tasks",storedTasks);
        
        // reset
        
        inputField.value = "";

        // Delete button function
        deleteBtn.onclick = function(){
            task.remove();
        }
    }else{
        inputField.setAttribute("placeholder","You Type A Task Here ... ")
    }
};