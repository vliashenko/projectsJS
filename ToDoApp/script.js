const trashBtn = document.querySelectorAll('.trashBtn');
const inputField = document.querySelector('.form-control');
const buttonPlus = document.querySelector('.buttonPlus');
const ToDoList  = document.querySelector('.thingToPut')

let tasks;
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'))

let todoItemElems = [];

function Task(description) {
    this.description = description;
    this.completed = false;
}

function createTemplate(task,index){
    return `
    <div class="toDoItem ${task.completed ? 'checked' : ""}">
        <input onclick="completedTask(${index})" type="checkbox"  ${task.completed ? 'checked' : ""} class="form-check-input" id=${index}>
            <label  class="form-check-label" for=${index}>${task.description}</label>
                <div onclick="deleteTask(${index})" class="deletebtn"  id=${index}>
                        <i class="fa fa-trash trashBtn"></i>
                </div>
    </div>`
}

const fillHtmlList = () => {
    ToDoList.innerHTML = '';
    
    if(tasks.length > 0){
        tasks.forEach((item,index)=> {
            ToDoList.innerHTML += createTemplate(item,index) 
        })
        todoItemElems = document.querySelectorAll('.toDoItem')
    }
}

fillHtmlList();


const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

const completedTask = index => {
    tasks[index].completed = !tasks[index].completed
    if(tasks[index].completed) {
        todoItemElems[index].classList.add('checked')
    } else {
        todoItemElems[index].classList.remove('checked')
    }

    updateLocal();
    fillHtmlList();
}

buttonPlus.addEventListener('click', ()=> {
    tasks.push(new Task(inputField.value));
    updateLocal();
    fillHtmlList();
    inputField.value = '';
})

const deleteTask = index => {
    todoItemElems[index].classList.add('delition');
    setTimeout(()=> {
    tasks.splice(index, 1);
    updateLocal();
    fillHtmlList(); 
    }, 500)
    
}



