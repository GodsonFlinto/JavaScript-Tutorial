let button = document.getElementById('add')
let todo = document.getElementById('todoList')
let input = document.getElementById('input')

let todos = []

window.onload = ()=>{
    console.log('loaded')
    todos = JSON.parse(localStorage.getItem('todos')) || []
    console.log(todos)
    todos.forEach(element => {
        addtodo(element)
    });
}

button.addEventListener('click',()=>{
    todos.push(input.value)
    console.log(todos)
    localStorage.setItem('todos',JSON.stringify(todos))  //storing the todos array in string format in local storage
    addtodo(input.value)
    input.value = ''
})

function addtodo(val){
    let para = document.createElement('p')
    para.innerHTML = val
    todo.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        removetodo(val)
    })
    para.addEventListener('dblclick',()=>{
        todo.removeChild(para)
        removetodo(val)
    })
}

function removetodo(val){
    let index = todos.indexOf(val)
    if(index>-1){
        todos.splice(index,1)
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}