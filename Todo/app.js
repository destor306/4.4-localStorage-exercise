const todoform = document.querySelector('#add-todos');
const todoinput = document.querySelector('#todos');
const todolist = document.querySelector('#todo-list');

if(localStorage.getItem("Todos")){
    const prev= JSON.parse(localStorage.getItem("Todos"));
    todolist.innerHTML = prev;
    console.log(prev);
}

todolist.addEventListener('click', function(e){
    if(e.target.tagName === "INPUT"){
        e.target.parentElement.classList.toggle('completed');
    }
    else if(e.target.tagName ==="BUTTON"){
        e.target.parentElement.remove();
    }
    const todos = todolist.innerHTML;
    localStorage.setItem("Todos", JSON.stringify(todos));
})


todoform.addEventListener('submit', function(e){
    e.preventDefault();
    const newTodos = document.createElement('li');
    const donebtn = document.createElement('input');
    donebtn.type="checkbox";
    const removebtn =document.createElement('button');
    removebtn.innerHTML ="remove";
    newTodos.innerHTML = todoinput.value;
    newTodos.prepend(donebtn);
    newTodos.appendChild(removebtn);
    todolist.appendChild(newTodos);
    todoinput.value ="";
})


