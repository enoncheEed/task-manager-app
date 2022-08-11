var test = document.querySelector('#add');
let new_task = document.getElementById("newTask")
// new_task = test
 var task_contents = '';
 var task_holder= document.getElementById("taskContainer")
 var add = document.querySelector('#newTask')
 var completed_section = document.getElementById("completed_section")
 var completed_content = '';
 var search = document.getElementById("serach_input");
test.addEventListener('click', add_task );
// const complete_arr = []
const completePart = []
const search_items =[]
let edit_input = document.getElementById("edit_task")
let new_input = ""



const task_arr = [
    {
        id:1,
        title: "cook",
        status: "uncompleted",
        
    },
    {
        id:2,
        title: "service car",
        status:"uncompleted",
    }
    

]
function createTask(title,uncompleted) {
    this.id = 0;
    this.status = "uncompleted";
    this.title = title;
}
update_dom()

function add_task(){ 
         let task02 = new createTask(new_task.value)
         console.log(task02)
         task_arr.push(task02)
        
        update_dom()
       
}
function update_dom() {
    task_contents=""
    for (let i = 0; i < task_arr.length; i++) {
        task_contents+=`<div class="activity rounded"> 
        <i class="  fas fa-check" onclick="completedButton(${i})" id="done"></i> ${task_arr[i].title} <i class= " pen fas fa-pen-alt" onclick="popupToggle_two(${i})"> </i> <i class=" trash fas fa-trash" onclick="delete_task(${i})" id="trash"></i></div>`
        console.log( task_arr[i].title) 
    }
   
    task_holder.innerHTML = task_contents;
    
}
function delete_task(ind) {
    task_arr.splice(ind,1)
    update_dom()  
    
}
function uncompletedPart(){
    const uncompletePart = task_arr.filter(u=>(u.status == "uncompleted"))
    task_contents=""
    for (let i = 0; i < uncompletePart.length; i++) {
        task_contents+=`<div class="activity rounded"> <i class="  fas fa-check" onclick="completedButton(${i})" id="done"></i> ${uncompletePart[i].title} <i class=" trash fas fa-trash" onclick="delete_task(${i})" id="trash"></i></div>`
        console.log(uncompletePart[i].title) 
    }
   
    task_holder.innerHTML = task_contents;
}
function completedButton(nd) {
    // console.log("hurray")
    task_arr[nd].status = "completed";
    console.log(task_arr[nd])
    update_dom()
}
function completedPart(){
    task_contents = ""
    let complete_arr = [];
    complete_arr = task_arr.filter(c=>(c.status == "completed"))
    for (let i = 0; i < complete_arr.length; i++) {
        task_contents+=`<div class="activity rounded"> <i class="  fas fa-check" onclick="completed(${i}" id="done"></i> ${complete_arr[i].title} <i class=" trash fas fa-trash" onclick="delete_task(${i})" id="trash"></i></div>`
    }
    task_holder.innerHTML = task_contents;
    // let i = 0;
    // if (complete_arr[i] == 1) {
    //     complete_arr.splice(i,1 )

        
    // }
}
function allPart() {
    update_dom()
}

function searchButton() {
    const search_items =  task_arr.filter(e=>(e.title.indexOf(search.value)!=(-1)))
    console.log(search_items);
    task_contents=""
    for (let i = 0; i < search_items.length; i++) {
        task_contents+=`<div class="activity rounded"> <i class="  fas fa-check" onclick="completed" id="done"></i> ${search_items[i].title} <i class=" trash fas fa-trash" onclick="delete_task(${i})" id="trash"></i></div>`
    }
   
    task_holder.innerHTML = task_contents;
   
    
    

}
function popupToggle() {
        const popup = document.getElementById('popup')  
        popup.classList.toggle('active')
}
function popupToggle_two(i) {
    const popupTwo = document.getElementById('edit-popup')
    popupTwo.classList.toggle('activeOne');
    edit_input.value = task_arr[i].title
     new_input = edit_input.value
    console.log(edit_input.value)
}
function edit(i){
    console.log("hurray")
    task_arr[i].title = edit_input.value
    
}


// update_dom()
// function update_dom() {
    
//     for (let i = 0; i < task_arr.length; i++) {
//         console.log( task_arr[i].title) 
//         task_contents+=`<div class="activity rounded"> <i class="  fas fa-plus"></i> ${task_arr[i].title} <i class=" trash  fas fa-trash"></i></div>`
//     }
//     console.log(task_contents)
//     console.log(task_holder)
//     task_holder.innerHTML = task_contents;
    
// }