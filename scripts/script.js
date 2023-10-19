import * as CRUD from './crudModule.js'
const inputEl = document.querySelector('#task-input');

inputEl.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		const obj = new CRUD.Task(inputEl.value);
		CRUD.taskArray.push(obj);
		console.log(CRUD.taskArray);
		inputEl.value = '';
	}
})
