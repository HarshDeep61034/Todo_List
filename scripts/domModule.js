const todosEl = document.querySelector('.todos');
const taskInfo = document.querySelector('.task-info');

function renderTodoList(tasks) {
	todosEl.innerHTML = '';
	for (let i = 0; i < tasks.length; i++) {
		let newDiv = document.createElement('div');
		newDiv.classList.add('todo-item', 'hover-div');
		newDiv.setAttribute('id', i);
		newDiv.innerHTML = `<div><input type="checkbox" name="" id=${i}>${tasks[i].title}</div>
					<div>
						<span class="material-symbols-outlined delete-btn" id=${i}>
							delete
						</span>
					</div>`

		todosEl.appendChild(newDiv);
	}
}

function renderTaskInfo(obj) {
	taskInfo.innerHTML = `<h2>${obj.title}</h2>
				<div class="headers"><span>${obj.duedate}</span>
					<span>${obj.listname}</span>
					<span>${obj.tag}</span>
				</div>

				<div>Description: <br>
				${obj.description}
				</div>
				<div class="subtasks">
					<h3>Subtasks:</h3>
					<div>o ugh</div>
					<div>o dsf</div>
					<div>o sdf</div>
					<div>o sdf</div>
					<div>o jkjli</div>
				</div>
				<hr>
				</div>`
}

export { renderTodoList, renderTaskInfo }
