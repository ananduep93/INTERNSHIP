function addItem() {
    var input = document.getElementById("listInput");
    var text = input.value;

    if (text == "") {
        alert("Please enter something!");
        return;
      }

    var li = document.createElement("li");
    li.innerText = text;
    document.getElementById("myList").appendChild(li);

    input.value = "";
}

function clearList() {
    document.getElementById("myList").innerHTML = "";
}


function addTask() {
    var input = document.getElementById("todoInput");
    var task = input.value;
    
if (task == "") {
    alert("Please enter a task!");
    return;
    }

    var li = document.createElement("li");
    li.innerText = task;
     
    li.onclick = function() {
    if (li.style.textDecoration == "line-through") {
        li.style.textDecoration = "none";
    } else {
        li.style.textDecoration = "line-through";
    }
    };

    var btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("todoList").appendChild(li);

    input.value = "";
}


function toggleMessage() {
    var msg = document.getElementById("toggleMsg");

    if (msg.style.display == "none") {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
}

