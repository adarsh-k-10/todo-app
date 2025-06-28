const addBtn =  document.getElementById("btn")
const taskList = document.getElementById("task-list")
const inputBox = document.getElementById("inputbox")


addBtn.addEventListener("click",(event)=>{
    event.preventDefault();

    const task = inputBox.value.trim();
    if(task === "") return ;

    const li = document.createElement("li")
    li.className = "task-items"

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
   
    checkbox.addEventListener("change",()=>{
        li.classList.toggle("completed",checkbox.checked)
    });
     
    const taskSpan = document.createElement("span")
    taskSpan.textContent = task

    const delBtn = document.createElement("button")
    delBtn.className = "del-btn"
    delBtn.textContent = "DELETE"

    delBtn.addEventListener("click",()=>{
        li.remove();
    });

    li.appendChild(checkbox)
    li.appendChild(taskSpan)
    li.appendChild(delBtn)
    taskList.appendChild(li)
    inputBox.value = "";

});