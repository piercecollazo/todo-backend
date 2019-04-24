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
}

function updateThirdTodo(event) {
    const index = JSON.parse()
    // const updatedTodo = {
    //     text: '????',
    //     completed: true
    // };
    const jsonnedTodo = JSON.stringify(updatedTodo);
    
    const xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://localhost:3000/todos/3');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = handleData;
    xhr.send(jsonnedTodo);
}

function handleData(event) {
    cleanDisplay();
    console.log(event.target.responseText);
    const listArray = JSON.parse(event.target.responseText);
    
    for(let i = 0; i < listArray.length; i++){
        listBuild(listArray[i]);
    }
}

function listBuild(item){
    const newLine = document.createElement('li');
        newLine.innerText = item.text;
    const list = document.querySelector('#list');

    list.appendChild(newLine)
}

function cleanDisplay(){
    const list = document.querySelector('#list');
    while(list.hasChildNodes() === true){
        list.removeChild(list.firstChild);
    }
}