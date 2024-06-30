let todo = [];

function start(){
while (true) {
    let req = prompt("Enter your request!!");

    if (req == "quit") {
        console.log("Quitting App ...............");
        break;
    }
    if (req == "list") {
        console.log("---All TASKS---");
        for (let i = 0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
    }else if (req == "add") {
        let task = prompt("Enter that you want to add!!");
        todo.push(task);
        console.log("Task Added");
    }else if(req == "delete"){
        let idx = prompt("Enter the index!!");
        if(idx <= todo.length){
            todo.splice(idx, 1);
            console.log("Task Deleted!!");
        }else if(idx = "69"){
            console.log("naughty ho rha ho ke....");
        }else{
            console.log("Invalid Index!!");
        }
        
    }else {
        alert("Invalid Request!!");
    }
}
}