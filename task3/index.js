const tasks = ['Do Task', 'Make work', 'Clean Home', 'Get info about task', 'Feed a dog'];
let list=document.getElementById("todo-list");
tasks.forEach(task =>{
    let li=document.createElement('li');
    li.className='task'
    li.textContent=task;
    list.appendChild(li);
})