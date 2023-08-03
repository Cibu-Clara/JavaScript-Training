let arrayOfTasks = [];
let lastClickedIndex = -1;
const localStorageKey = "LOCAL_STORAGE_ARRAY_KEY"

function loadArray() {
    if (localStorage.getItem(localStorageKey) != null && localStorage.getItem(localStorageKey) != "") {
        arrayOfTasks = localStorage.getItem(localStorageKey).split(",");
    }
    displayTasks();
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const task = taskInput.value;
    if (task != "") {
        arrayOfTasks.push(task.trim());

        // clear the input field after getting the value
        taskInput.value = "";
        console.log(arrayOfTasks);
        localStorage.setItem(localStorageKey, arrayOfTasks);
        displayTasks();
    }
    else {
        alert("Please enter a task!");
    }
}

function displayTasks() {
    const taskList = document.getElementById("taskList");

    taskList.innerText = "";
    arrayOfTasks.forEach((el, index) => {
        const li = document.createElement("li");
        li.innerText = el;
        taskList.appendChild(li);
        li.addEventListener("click", () => {
            const updateField = document.getElementById("updateField");
            updateField.value = li.innerText;
            document.getElementById("updateField").disabled = false;
            lastClickedIndex = index;
        })
    });

}

function updateTask() {
    if (document.getElementById("updateField").disabled === true)
        alert("Please select a task!")
    else if (updateField.value === "")
        alert("Field is empty!")
    else {
        const updateField = document.getElementById("updateField");
        if (confirm("Are you sure you want to update this task?")) {
            arrayOfTasks[lastClickedIndex] = updateField.value.trim();
            localStorage.setItem(localStorageKey, arrayOfTasks);
        }
        displayTasks();
    }
    document.getElementById("updateField").disabled = true;
    document.getElementById("updateField").value = "";
}

function deleteTask() {
    if (document.getElementById("updateField").disabled === true)
        alert("Please select a task!")
    else {
        if (confirm("Are you sure you want to delete this task?")) {
            arrayOfTasks.splice(lastClickedIndex, 1);
            localStorage.setItem(localStorageKey, arrayOfTasks);
        }
        displayTasks();
    }
    document.getElementById("updateField").disabled = true;
    document.getElementById("updateField").value = "";
}