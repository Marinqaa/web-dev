// Select elements
const addTaskInput = document.getElementById("addTask");
const addButton = document.getElementById("add-btn");
const tasksContainer = document.getElementById("tasks");

// Function to create a task element
function createTask(taskText) {
    // Create task div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("change", () => {
        taskTextElement.classList.toggle("completed", checkbox.checked);
    });

    // Create task text
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add("task-text");

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => {
        tasksContainer.removeChild(taskDiv);
    });

    // Append elements to the task div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskTextElement);
    taskDiv.appendChild(deleteButton);

    return taskDiv;
}

// Function to add a task
function addTask() {
    const taskText = addTaskInput.value.trim();
    if (taskText) {
        const taskElement = createTask(taskText);
        tasksContainer.appendChild(taskElement);
        addTaskInput.value = ""; // Clear input field
    } else {
        alert("Please enter a task.");
    }
}

// Event listener for add button
addButton.addEventListener("click", addTask);

// Allow pressing "Enter" to add task
addTaskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
