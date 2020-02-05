const toDoForm = document.querySelector('.toDoForm');
const toDoInput = toDoForm.querySelector("input");
const pendingList = document.querySelector(".pendingList");
const finishedList = document.querySelector(".finishedList");
const TODOS_LS = "PENDING";
const FINISHED_LS = "FINISHED";
let toDos = [];
let finishedToDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos)); // localStorage에는 string만 저장가능하기에 
}

function saveFinishedToDos() {
    localStorage.setItem(FINISHED_LS,JSON.stringify(finishedToDos)); // localStorage에는 string만 저장가능하기에 
}

function deleteToDo(event) {
    // console.log(event.target.parentNode); // 어떤 버튼이 눌렸는지 알기 위함.
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id != parseInt(li.id);
    }); // filter는 안의 함수값이 true인 것만을 추출하는 함수 like R
    toDos = cleanToDos;
    saveToDos();
}

function deleteFinished(event) {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);

    const cleanFinished = finishedToDos.filter(function(finishedToDo) {
        return finishedToDo.id != parseInt(li.id);
    });
    finishedToDos = cleanFinished;
    saveFinishedToDos();
}

function backToDos() {
    const btn = event.target;
    const li = btn.parentNode;
    finishedList.removeChild(li);

    const cleanFinished = finishedToDos.filter(function(finishedToDo) {
        return finishedToDo.id != parseInt(li.id);
    });

    const backToDo = finishedToDos.filter(function(finishedToDo){
        return finishedToDo.id == parseInt(li.id);
    });
    
    finishedToDos = cleanFinished;
    saveFinishedToDos();

    toDos.push(backToDo[0]);
    saveToDos();
    paintToDoB(backToDo[0].id, backToDo[0].text);
}

function paintFinishedToDo(id,text) {
    const newLi = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteFinished);

    const backBtn = document.createElement("button");
    backBtn.innerText = "🔙";
    backBtn.addEventListener("click", backToDos);
    

    const finishedId = id;

    newLi.appendChild(span);
    newLi.appendChild(delBtn);
    newLi.appendChild(backBtn);
    newLi.id = finishedId;
    finishedList.appendChild(newLi);
}

function finishedToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    pendingList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id != parseInt(li.id);
    }); // filter는 안의 함수값이 true인 것만을 추출하는 함수 like R

    const finishedToDo = toDos.filter(function(toDo){
        return toDo.id == parseInt(li.id);
    });

    toDos = cleanToDos;
    finishedToDos.push(finishedToDo[0]);
    
    saveToDos();
    saveFinishedToDos();

    //paint finishedToDos
    paintFinishedToDo(finishedToDo[0].id,finishedToDo[0].text);
    
}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);

    const checkBtn = document.createElement("button");
    checkBtn.innerText = "✔️";
    checkBtn.addEventListener("click", finishedToDo);

    const newId = toDos.length+1;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = newId;
    pendingList.appendChild(li);

    const toDoObj = {
        id:toDos.length+1,
        text:text,
    };
    toDos.push(toDoObj);
    saveToDos();
}

function paintToDoB(id, text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = text;

    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);

    const checkBtn = document.createElement("button");
    checkBtn.innerText = "✔️";
    checkBtn.addEventListener("click", finishedToDo);

    const newId = toDos.length+1;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.id = id;
    pendingList.appendChild(li);

    saveToDos();
}

function submitHandler(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos!=null){
        const parsedToDos = JSON.parse(loadedToDos); // Javascript object notation. object->string or string->object
        parsedToDos.forEach(function(toDo){ // forEach는 array의 각 성분들에 대해 함수 적용.
            paintToDo(toDo.text);
        });
    }
}

function loadFinishedToDos(){
    const loadedFinishedToDos = localStorage.getItem(FINISHED_LS);
    if(loadedFinishedToDos!=null){
        const parsedFinishedToDos = JSON.parse(loadedFinishedToDos); // Javascript object notation. object->string or string->object
        parsedFinishedToDos.forEach(function(finishedToDo){ // forEach는 array의 각 성분들에 대해 함수 적용.
            paintFinishedToDo(finishedToDo.id, finishedToDo.text);
        });
    }
}

function init() {
    loadToDos();
    loadFinishedToDos();
    toDoForm.addEventListener("submit", submitHandler);
}

init();
