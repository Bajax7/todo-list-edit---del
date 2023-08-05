const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('list-Container');
const addBtn = document.getElementById('addBtn');

// means the variable is empty now however may have a value
let editTodo = null;

const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert('You must write something!');
        return false;
    }

    if(addBtn.value === 'Edit'){
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = 'Add';
        inputBox.value = '';
       
    }
    else{

// creating li and p tag
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = inputText;
    li.appendChild(p);

    // creating edit btn/ class
    const editBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    editBtn.classList.add('btn', 'editBtn');
    li.appendChild(editBtn)


    // creating delete btn/ class
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('btn', 'deleteBtn');
    li.appendChild(deleteBtn);


    listContainer.appendChild(li);
    inputBox.value ='';


    }
// activating delete and edit btns
    }
    const updateTodo = (e)=>{
        if(e.target.innerHTML === 'Delete'){
            listContainer.removeChild(e.target.parentElement);
        }

        if(e.target.innerHTML === 'Edit'){
            inputBox.value = e.target.previousElementSibling.innerHTML;
            inputBox.focus();
            addBtn.value = 'Edit';
            editTodo = e;
        }
       

    }

addBtn.addEventListener('click', addTodo);
listContainer.addEventListener('click', updateTodo);

