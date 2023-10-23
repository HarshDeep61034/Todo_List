let taskArray = [];

class Task {
	constructor(title, description, duedate, tag, subtasks, listname) {
		this.title = title
		this.description = description
		this.duedate = duedate
		this.tag = tag
		this.subtasks = subtasks
		this.listname = listname
	}
}

function createTask(value) {
	const obj = new Task(value);
	taskArray.push(obj);
	console.log(taskArray);
}

function deleteTask(index) {
	taskArray.splice(index, 1);
}


export { taskArray, createTask, deleteTask }
