// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

// Functions

function addTodo (event){

    // prevent default event
    event.preventDefault();
    
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create li 
    const newTodo = document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    
    // add todo-items to todo list
    todoDiv.appendChild(newTodo);

    // check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("check-btn");
    todoDiv.appendChild(completedButton);

    //delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append inside the todo-list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value="";
};


function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend',function(){
            todo.remove(); 
        });
        
    }

    // check mark
    if(item.classList[0] === 'check-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "All":
                // todo.style.display = "flex";
                break
            case "Completed":
                if(todo.classList.contains("Completed")){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
        }
    });
}