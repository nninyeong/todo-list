// task 추가
const taskAddButton = document.querySelector('#taskAddButton');
taskAddButton.addEventListener("click", addTask);

const taskList = document.querySelector('#list');
const taskInput = document.querySelector('#taskInput');
function addTask() {
    let newTask = taskInput.value;
    if(newTask == "") {
        alert("할 일을 입력하세요!");
        return;
    }

    let newLi = document.createElement('li');
    newLi.className = "task";
    newLi.innerHTML = `
        <input type="checkbox" name="task" id="task${taskList.children.length + 1}">
        <label for="task${taskList.children.length + 1}">${newTask}</label>
    `;

    let deleteButton = document.createElement('button');
    deleteButton.className = "taskDeleteButton";
    deleteButton.addEventListener("click", deleteTask);
    
    newLi.appendChild(deleteButton);
    taskList.appendChild(newLi);

    taskInput.value = '';
}

// // task 삭제
function deleteTask(e) {
    e.target.parentElement.remove();
}