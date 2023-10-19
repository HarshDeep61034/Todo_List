let taskArray = [{
	title: 'make project',
	description: 'bhai yo description hai',
	duedate: -14,
	tag: '#shopping',
	subtasks: ['lelo', 'kaddu', 'loki', 'tori'],
	listname: 'personal'
}];

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

const mytask = new Task("make project", "bhai yo description hai", 20 - 11 - 23, "#shopping", ["lelo", "kaddu", "loki", "tori"], "personal");


const yourtask = new Task("msdfssdf", "bhZSFsfdsdai", 20 / 3 / 24, "#ssasda", ["lelo", "kaddu", "loki", "tori"]);

taskArray.push(mytask);
taskArray.push(yourtask);
console.log(taskArray[1].title);

export { taskArray, Task }
