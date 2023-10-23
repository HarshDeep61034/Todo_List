import * as CRUD from './crudModule.js'
import * as DOM from './domModule.js'
const inputEl = document.querySelector('#task-input');
const submitbtn = document.querySelector('.material-icons');
const todos = document.querySelector('.todos');

inputEl.addEventListener('keydown', addtaskandrender);
submitbtn.addEventListener('click', addtaskandrender);

todos.addEventListener('click', (event) => {
	if (event.target.classList.contains('delete-btn')) {
		CRUD.deleteTask(event.target.id);
		DOM.renderTodoList(CRUD.taskArray);
	}
	if (event.target.classList.contains('todo-item')) {
		DOM.renderTaskInfo(CRUD.taskArray[event.target.id]);
	}
})

function addtaskandrender(event) {
	if (event.target.value !== '' && event.key === 'Enter' || event.target.classList[0] === 'material-icons') {
		CRUD.createTask(inputEl.value);
		DOM.renderTodoList(CRUD.taskArray);
		inputEl.value = '';
	}
}
