var test = document.querySelector('#add');
 var task_contents = '';
 var task_holder= document.getElementById("taskContainer")
 var add = document.querySelector('#newTask')
 var completed_section = document.getElementsByClassName("completed_section")
 var completed_content = '';
 var search = document.getElementById("serach_input");
test.addEventListener('click', add_task );
const task_arr =["homework", "workout", "coding"]
const complete =[]
const search_items =[]




function add_task(){ 
    if(add.value.length == 0){
        window.alert("enter a task")
    }
    else{
     
        task_arr.push(add.value)
        // console.log(task_arr)
        update_dom()
    }
    
}
function update_dom() {
    task_contents=""
    for (let i = 0; i < task_arr.length; i++) {
        // console.log( task_arr[i]) 
        task_contents+=`<div class="activity rounded"> <i class="  fas fa-check" onclick="completed" id="done"></i> ${task_arr[i]} <i class=" trash fas fa-trash" onclick="delete_task(${i})" id="trash"></i></div>`
    }
    // console.log(task_contents)
    // console.log(task_holder)
    task_holder.innerHTML = task_contents;
    
}
function delete_task(ind) {
    // console.log(task_arr)
    task_arr.splice(ind,1)
    update_dom()
    
    
    
}
function searchButton() {
    const search_items = task_arr.filter(e=>(e.indexOf(search.value)!=(-1)))
    // console.log(;
    console.log(search_items);
    task_contents=""
    for (let i = 0; i < search_items.length; i++) {
        // console.log( search_items[i]) 
        task_contents+=`<div class="activity rounded"> <i class="  fas fa-check" onclick="completed" id="done"></i> ${search_items[i]} <i class=" trash fas fa-trash" onclick="delete_task(${i})" id="trash"></i></div>`
    }
    // console.log(task_contents)
    // console.log(task_holder)
    task_holder.innerHTML = task_contents;
    if(search_items.value.length == 0){
        update_dom()
    }
    
    

}

function completed() {
    complete.push(task_arr[i])
    console.log(complete)
    console.log("complete")
}
function complete_page() {
    console.log("we did ")
    task_holder.style.display ="none"
    
}
update_dom()
// const task_arr = [
//     {
//         id:1,
//         title: "my first",
//         status: "completed",
        
//     },
//     {
//         id:2,
//         title: "second",
//         status:"uncompleted",
//     }
// ]
// function update_dom() {
    
//     for (let i = 0; i < task_arr.length; i++) {
//         console.log( task_arr[i].title) 
//         task_contents+=`<div class="activity rounded"> <i class="  fas fa-plus"></i> ${task_arr[i].title} <i class=" trash  fas fa-trash"></i></div>`
//     }
//     console.log(task_contents)
//     console.log(task_holder)
//     task_holder.innerHTML = task_contents;
    
// }