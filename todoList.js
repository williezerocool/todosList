


function addTodo(){
   
    var input = document.getElementById("todo").value;
    var li = document.createElement("Li");
    li.innerHTML = input;
    document.getElementById("myUl").appendChild(li);
    
}

function deleteTodo(position){
   
    position = parseInt(document.getElementById("deletePosition").value);
    document.getElementsByTagName("Li")[position].innerHTML = "";
}