let store = JSON.parse(localStorage.getItem("todo"));
const todo = store?store:[];
console.log(todo);   

const svg = `x`

document.addEventListener("DOMContentLoaded",()=>{
    for(let i of todo)
    {           
        addChild(i); 
    }
})
function addChild(inputField){
    let div = document.createElement("div");
    div.className = "todo-element"
    let input = document.createElement("input")
    input.type = "checkbox"
    input.name = "todo-check"
    input.addEventListener("click",(e)=>{
        Strike(e);  
    })
    let todiv = document.createElement("div")
    todiv.className = "todo-content";
    todiv.textContent = inputField;
    let closediv = document.createElement("div")
    closediv.className = "close";
    closediv.innerHTML = svg;
    closediv.addEventListener('click',(e)=>{
        remove(e)
    })
    div.appendChild(input);
    div.appendChild(todiv);
    div.appendChild(closediv);


    let list = document.getElementById("todo-list")
    list.appendChild(div);
}

function addNode(inputField){
    if(inputField && todo.includes(inputField)){
        if(confirm("Todo already Exists. Do you want to add again?"))
            {
                addChild(inputField)
                todo.push(inputField)
                localStorage.setItem("todo",JSON.stringify(todo));
            }
    }
    else if(inputField)
    {
        todo.push(inputField)
        localStorage.setItem("todo",JSON.stringify(todo));
        addChild(inputField)
    }
    else{
        alert("Invalid Todo")
    }
}


document.getElementById("myform").addEventListener("submit",(e)=>{
    e.preventDefault();
    let inputField = document.getElementById("task").value;
    document.getElementById("task").value = "";
    addNode(inputField);
    // Storage(inputField); q
})

function Strike(e){
    let clicked = e.target
    let parent = clicked.parentElement;
    let elemt = parent.querySelector('.todo-content')
    elemt.innerHTML = `<strike>${elemt.textContent}</strike>`
}

function remove(e){
    let clicked = e.target;
    let parent = clicked.parentElement;
    let grandparent = parent.parentElement;
    grandparent.removeChild(parent)
}