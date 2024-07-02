const taskAddButton = document.querySelector('#taskAddButton');
taskAddButton.addEventListener("click", addTask);

const taskList = document.querySelector('#list');
const taskInput = document.querySelector('#taskInput');
function addTask() {
    let newTask = taskInput.value;
    console.log(taskList.children.length + 1);
    let newLi = `
    <li class="task">
        <input type="checkbox" name="task" id="task${taskList.children.length + 1}">
        <label for="task${taskList.children.length + 1}">${newTask}</label>
    </li>
    `;

    taskList.innerHTML += newLi;
    taskInput.value = '';
}