



function addTodo(){
    
    var input = document.getElementById("todo").value;
    var li = document.createElement("Li");
    li.innerHTML = input + " - " + todoDate();
    document.getElementById("myUl").appendChild(li);
    
   
}

function deleteTodo(position){
   
    position = parseInt(document.getElementById("deletePosition").value);
    document.getElementsByTagName("Li")[position].innerHTML = "";
}

function clearAddTodoInput(){
   document.getElementById("todo").value = " ";
   
}

function clearDeleteTodoInput(){
   document.getElementById("deletePosition").value = " ";
   
}

function todoDate(){
    
    var today = new Date();
    var now = today.toDateString();
    return now;
}