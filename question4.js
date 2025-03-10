let task = [];

function addTask(id, name, description) {
    task.push({ id, name, description });
}

function viewTask(){
    return task;
}

function updateTask(id, name, description){
    const index = task.findIndex((task) => task.id === id);
    task[index] = { id, name, description };
}

function deleteTask(id){
    const index = task.findIndex((task) => task.id === id);
    task.splice(index, 1);
}

addTask(1, 'Task 1', 'Description 1');
console.log(viewTask());
viewTask(1, 'Task 1', 'Description 1');
console.log(viewTask());
updateTask(1, 'Task 1 Updated', 'Description 1 Updated');
console.log(viewTask());
deleteTask(1);
console.log(viewTask());