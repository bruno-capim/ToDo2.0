const taskList = document.getElementById('tasks');

function botaoT(){
	let inputValue = document.getElementById("myInput").value;
	let dateControl = document.querySelector('input[type="date"]');
	const inputField = document.getElementById('myInput');

	if (!inputValue || inputValue === '') 
	{
		alert("Erro");
	} else {
		addTask(inputField.value + ' ' + dateControl.value);
	}
}

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}