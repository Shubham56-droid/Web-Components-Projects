let addItem = document.querySelector('#push');
let allItems =  document.querySelector('#tasks');
let newTaskItem =document.querySelector('#newtask input');


$(document).ready(function(){
    $('#tasks').tabs();
    $('.task').sortable({axis:y,containment:"#tasks"});
})


addItem.onclick = function(){
    
    if(newTaskItem.value.length == 0){
        alert("Please Enter a Task")
    
    }
    else{
       allItems.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${newTaskItem.value}
                </span>
                <button class="delete">
                <i class="fa fa-trash-alt""></i>
                </button>
            </div>
        `;
    }
    let currentTasks = document.querySelectorAll('.delete');
    for(var i=0; i<currentTasks.length; i++){
        currentTasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }

    let tasks=document.querySelectorAll('.task');
    for(var i=0; i<tasks.length; i++){
        tasks[i].onclick=function(){
            this.classList.toggle('completed');
        }
    }

    newTaskItem.value="";

}

