window.onload = init;

function init() {
    document.querySelector('#get').addEventListener('click', getTodos);
    document.querySelector('#post').addEventListener('click', postTodo);
    document.querySelector('#put').addEventListener('click', updateThirdTodo);
}

function getTodos(event) {
    event.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/todos');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleData;
    xhr.send();
}

function postTodo(event) {
    event.preventDefault();

    const newTodo = {
        text: document.querySelector('#new-todo').value,
        completed: false
    };
    
    const jsonnedTodo = JSON.stringify(newTodo);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/todos');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleData;
    xhr.send(jsonnedTodo);
    // document.querySelector('#new-todo').value = '';
}

function updateThirdTodo(event) {
    const source = JSON.parse(event.target.responseText);
    source[2].completed = true;

    const jsonnedTodo = JSON.stringify(updatedTodo);
    
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:3000/todos/3');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleData;
    xhr.send(jsonnedTodo);
}

function handleData(event) {
    event.preventDefault();
    cleanDisplay();
    console.log(event.target.responseText);
    const listArray = JSON.parse(event.target.responseText);
    for(let i = 0; i < listArray.length; i++){
        listBuild(listArray[i], listArray);
    }
}

function listBuild(item, arr){
    const newLine = document.createElement('li');
        newLine.innerText = item.text;
    const list = document.querySelector('#list');
    if(arr[2].text === item.text && item.completed === true){
        newLine.style.textDecoration = 'line-through';
        list.appendChild(newLine);
    }else{
        list.appendChild(newLine);
    }
}

function cleanDisplay(){
    const list = document.querySelector('#list');
    while(list.hasChildNodes() === true){
        list.removeChild(list.firstChild);
    }
}

// This coulde be used for a function to mark stuff done as you like.
// I'm just keeping this here in case a stretch goal needs it.
// const lineText = event.target.innerText
//     let index = -1
//     for(let i = 0; i < todos.length; i++){
//         if(todos[i].text === lineText){
//             index = i;
//         }
//     }

//     if(todos[index].completed === true){
//         todos[index].completed = false;
//         clickedLine.style.textDecoration = 'none';
//     } else if(todos[index].completed === false){
//         todos[index].completed = true;
//         clickedLine.style.textDecoration = 'line-through';
//     }