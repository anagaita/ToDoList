const newTaskContainer = document.getElementById('new-task-container')
const taskTitle = document.getElementById('task-title')
const taskDescription = document.getElementById('task-description')
const taskList = document.getElementById('task-list')
const taskDisplay = document.getElementById('task-display')
const completedTab = document.getElementById ('completed-tab')
const notesTab = document.getElementById ('notes-tab')
const newNoteContainer = document.getElementById('new-note-container')
const noteTitle = document.getElementById('note-title')
const noteText = document.getElementById('new-note')
const noteList = document.getElementById('note-list')

const date = document.getElementById('date')
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date()
const day = today.getDate().toString()
let month = months[today.getMonth()]


date.innerText = `${day} ${month}`

document.addEventListener('click', function(e){
    if (e.target.id === 'create-task-btn'){
        createTask()
    } else if (e.target.id === 'create-new-task-btn'){
        renderNewTask()
    } else if (e.target.id === 'close-new-task-btn') {
        newTaskContainer.style.display = 'none'
    } else if (e.target.id === 'completed-link'){
        openCompletedTab()
    } else if (e.target.id === 'notes-link'){
        openNotesTab()
    } else if (e.target.id === 'main-tab') {
        openMainTab()
    } else if (e.target.id === 'new-note-btn') {
        createNote()
    } else if (e.target.id === 'create-note-btn') {
        renderNewNote()
    }
})

function createTask(){

    /* toggle the new task container */
    if(newTaskContainer.style.display === 'block'){
        newTaskContainer.style.display = 'none'
    } else {
        newTaskContainer.style.display = 'block'
    }
}

function renderNewTask(){
    if (taskTitle.value !== ''){ 

        const taskId = `task-${Math.random().toString(16).slice(2, 8)}` /* unique id */

        const task = document.createElement('div') /* creates the div that will contain the new task */
        task.className = 'task'
        task.id = taskId

        const titleDisplay = document.createElement('div') 
        titleDisplay.className = 'title-display'

        const label = document.createElement('label') 
        label.innerText = taskTitle.value

        const input = document.createElement('input')
        input.type = 'checkbox'

        input.addEventListener('change', function(){ /* when the checkbox is clicked the task is transfered to the completed tab */
            if (input.checked) {
                document.getElementById('completed-task-list').appendChild(task)
            }
        })

        /* makes the title complete (label + checkbox) */
        titleDisplay.appendChild(label)
        titleDisplay.appendChild(input)

        const description = document.createElement('p')
        description.className = 'description'
        description.innerText = taskDescription.value

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-task-btn'
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        deleteBtn.addEventListener('click', function(){
            task.remove()
        })

        /* makes the task div complete */
        task.appendChild(titleDisplay)
        task.appendChild(description)
        task.appendChild(deleteBtn)

        /* puts the tasks in task-list */
        taskList.appendChild(task)
    }


    taskTitle.value = ''
    taskDescription.value = ''
    newTaskContainer.style.display = 'none' 
}

function openCompletedTab(){
    completedTab.style.display = 'block'
    taskDisplay.style.display = 'none'
    notesTab.style.display = 'none'
}

function openNotesTab(){
    notesTab.style.display = 'block'
    taskDisplay.style.display = 'none'
    completedTab.style.display = 'none'
}

function openMainTab(){
    taskDisplay.style.display = 'block'
    notesTab.style.display = 'none'
    completedTab.style.display = 'none'
}

function createNote(){
    if(newNoteContainer.style.display === 'block') {
        newNoteContainer.style.display = 'none'
    } else {
        newNoteContainer.style.display = 'block'
    }
}

function renderNewNote() {
    if(noteTitle !== '') {
        const noteId = `note-${Math.random().toString(16).slice(2, 8)}`

        const note = document.createElement('div')
        note.className = 'note'
        note.id = noteId

        const titleDisplay = document.createElement('div')
        titleDisplay.className = 'note-title'

        const title = document.createElement('p')
        title.innerText = noteTitle.value

        titleDisplay.appendChild(title)

        const textDisplay = document.createElement('p')
        textDisplay.className = 'note-text'
        textDisplay.innerText = noteText.value

        const deleteBtn = document.createElement('button')
        deleteBtn.className = 'delete-note-btn'
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        deleteBtn.addEventListener('click', function(){
            note.remove()
        })

        note.appendChild(titleDisplay)
        note.appendChild(textDisplay)
        note.appendChild(deleteBtn)

        noteList.appendChild(note)
    }
    
    noteTitle.value = ''
    noteText.value = ''
    newNoteContainer.style.display = 'none'
}