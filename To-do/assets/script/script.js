const taskList = document.getElementById('tasks');

function botaoT(){
	let li = document.createElement("li");
	let inputValue = document.getElementById("myInput").value;
	const inputField = document.getElementById('myInput');
	let t = document.createTextNode(inputField);

	if (!inputValue || inputValue === '') 
	{
		alert("Erro");
	} else {
		addTask(inputField.value);
	}
}

function botaoL(){
	let li = document.createElement("li");
	let inputValue = document.getElementById("myInput").value;
	let inputDate = document.getElementById("date").value;
	let d = document.createTextNode(inputDate);
	let t = document.createTextNode(inputValue);
  	li.appendChild(t);

	if (!inputValue || inputValue === '') 
	{
		alert("Erro");
	} else {
		document.getElementById("myUL").appendChild(li);
	}
	document.getElementById("myInput").value = "";

	let span = document.createElement("SPAN");
	let txt = document.createTextNode(" (X) - Remover");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	let close = document.getElementsByClassName("close");
	for (let i = 0; i < close.length; i++) 
	{
  	close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  	}
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