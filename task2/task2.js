document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.disabled = true;

    taskInput.addEventListener("input", function() {
        if (taskInput.value.trim() !== "") {
            addButton.disabled = false;
        } else {
            addButton.disabled = true;
        }
    });

    addButton.addEventListener("click", function() {
        const taskName = taskInput.value.trim();
        if (taskName !== "") {
            const task = document.createElement("div");
            task.className = "task";
            const checkbox = document.createElement("input");
            checkbox.className = "checbox";
            checkbox.type = "checkbox";
            checkbox.addEventListener("change", function() {
                if (checkbox.checked) {
                    taskNameElem.classList.add("completed");
                } else {
                    taskNameElem.classList.remove("completed");
                }
            });
            const taskNameElem = document.createElement("span");
            taskNameElem.textContent = taskName;
            task.appendChild(checkbox);
            task.appendChild(taskNameElem);
            taskList.appendChild(task);
            taskInput.value = "";
            addButton.disabled = true;
        }
    });
});