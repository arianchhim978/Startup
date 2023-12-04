// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get the input field and button
    var taskInput = document.getElementById('taskInput');
    var addTaskButton = document.getElementById('addTask');

    // Get the task list ul element
    var taskList = document.getElementById('taskList');

    // Add click event listener to the "Add Task" button
    addTaskButton.addEventListener('click', function() {
        // Get the value of the task input
        var taskText = taskInput.value.trim();

        // Check if the task input is not empty
        if (taskText !== '') {
            // Create a new li element
            var newTask = document.createElement('li');

            // Set the text content of the li element
            newTask.textContent = taskText;

            // Append the new task to the task list
            taskList.appendChild(newTask);

            // Clear the task input field
            taskInput.value = '';
        }
    });
});
