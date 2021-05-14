import {sidebar, content} from './interface';

const body = document.querySelector('body');
const contentDisplay = content();
let i = 0;
let k = 0;
let allTasks = [];
let allProjects = [];

const mainContent = () => {
	addProjects();
}

const addProjects = () => {
	const emptyProject = document.createElement('div');
	emptyProject.id = 'emptyProject';
	const addProjectHead = document.createElement('h1');
	addProjectHead.textContent = 'Add New Project';
	addProjectHead.classList.add('labels');
	addProjectHead.style.marginRight = '0';
	const addProject = document.createElement('button');
	addProject.id = 'addProjectBtn';
	addProject.textContent = '+';
	addProject.addEventListener('click', () => {
		projectContent(emptyProject, addProjectHead, addProject); 
		emptyProject.removeChild(addProject);
		emptyProject.removeChild(addProjectHead);
		addProjects();
	});
	emptyProject.appendChild(addProjectHead);
	emptyProject.appendChild(addProject);
	contentDisplay.appendChild(emptyProject);
}

const projectContent = (emptyProject, addProjectHead, addProject) => {
	const projectHolder = document.createElement('div');
	projectHolder.id = 'projectHolder';
	projectHolder.classList.add('projectHolder');
	const projectNameLabel = document.createElement('p');
	projectNameLabel.classList.add('labels');
	projectNameLabel.textContent = 'Name';
	const projectName = document.createElement('INPUT');
	projectName.classList.add('projectInputs');
	projectName.setAttribute('type', 'text');
	projectHolder.appendChild(projectNameLabel);
	projectHolder.appendChild(projectName);
	const projectInfoLabel = document.createElement('p');
	projectInfoLabel.classList.add('labels');
	projectInfoLabel.textContent = 'Description';
	const projectInfo = document.createElement('TEXTAREA');
	projectInfo.classList.add('projectInputs');
	projectHolder.appendChild(projectInfoLabel);
	projectHolder.appendChild(projectInfo);
	const addNewProjectBtn = document.createElement('button');
	addNewProjectBtn.id = 'addNewProjectBtn';
	addNewProjectBtn.textContent = '+';
	projectHolder.appendChild(addNewProjectBtn);
	emptyProject.appendChild(projectHolder);
	addNewProjectBtn.addEventListener('click', () => {
		const projectNameValue = projectName.value;
		const projectInfoValue = projectInfo.value;
		emptyProject.id = 'emptyProjectAfter';
		projectsHolder(emptyProject, projectNameValue, projectInfoValue);
		emptyProject.removeChild(projectHolder);
	});
}

const projectsHolder = (emptyProject, nameValue, infoValue) => {
	const projects = document.createElement('div');
	projects.id = 'projects';
	const tasksInProjects = document.createElement('div');
	tasksInProjects.classList.add('tasksInProjects');
	tasksInProjects.id = 'tasksInProjects' + i;
	const projectName = document.createElement('h1');
	projectName.classList.add('projectHeadings');
	projectName.textContent = 'Name: ' + nameValue;
	projects.appendChild(projectName);
	const projectInfo = document.createElement('h3');
	projectInfo.classList.add('projectHeadings');
	projectInfo.textContent = 'Description: ' + infoValue;
	projects.appendChild(projectInfo);
	const addTaskBtn = document.createElement('button');
	addTaskBtn.id = 'addTaskBtn' + i;
	addTaskBtn.classList.add('addTaskBtn');
	addTaskBtn.textContent = 'Add Task';
	addTaskBtn.addEventListener('click', () => {
		const id = event.target.id;
		const numbo = id.slice(-1);
		console.log(id);
		taskContent(tasksInProjects, i); 
	});
	const removeProject = document.createElement('button');
	removeProject.classList.add('removeProject');
	removeProject.id = 'removeProject' + i;
	removeProject.textContent = 'X';
	removeProject.addEventListener('click', () => {removeProjects(event.target.id, allProjects);});
	allProjects[i] = emptyProject;
	const hideTasks = document.createElement('button');
	hideTasks.id = 'hideTasks' + i;
	hideTasks.classList.add('hideTasks');
	hideTasks.textContent = 'Collapse';
	hideTasks.addEventListener('click', () => {
		const id = event.target.id;
		const numId = id.slice(-1);
		const tasks = document.getElementById('tasksInProjects' + numId);
		if (tasks.style.display == 'none') {
			tasks.style.display = 'block';
			hideTasks.textContent = 'Collapse';
		}
		else {
			tasks.style.display = 'none';
			hideTasks.textContent = 'Expand';
		}
	});
	projects.appendChild(addTaskBtn);
	projects.appendChild(hideTasks);
	projects.appendChild(removeProject);
	emptyProject.appendChild(projects);
	emptyProject.appendChild(tasksInProjects);
	i++;
}

const removeProjects = (id, allProjects) => {
	const projectId = id.slice(-1);
	const projectKill = allProjects[projectId];
	contentDisplay.removeChild(projectKill);
};

const taskContent = (projects, i) => {
	const addTaskHolder = document.createElement('div');
	addTaskHolder.id = 'addTaskHolder';
	const nameElement = document.createElement('div');
	const taskNameLabel = document.createElement('p');
	taskNameLabel.classList.add('labels');
	taskNameLabel.textContent = 'Name';
	const taskName = document.createElement('INPUT');
	taskName.classList.add('taskInputs');
	taskName.setAttribute('type', 'text');
	const dateElement = document.createElement('div');
	const taskDateLabel = document.createElement('p');
	taskDateLabel.classList.add('labels');
	taskDateLabel.textContent = 'Date';
	const taskDate = document.createElement('INPUT');
	taskDate.classList.add('taskInputs');
	taskDate.setAttribute('type', 'date');
	const infoElement = document.createElement('div');
	infoElement.style.width = '50%';
	const taskInfoLabel = document.createElement('p');
	taskInfoLabel.classList.add('labels');
	taskInfoLabel.textContent = 'Description';
	const taskInfo = document.createElement('TEXTAREA');
	taskInfo.id = 'taskInfoInput';
	const taskElement = document.createElement('div');
	const taskActiveLabel = document.createElement('p');
	taskActiveLabel.classList.add('labels');
	taskActiveLabel.textContent = 'Status';
	const taskActive = document.createElement('button');
	taskActive.id = 'taskActiveBtn';
	taskActive.textContent = 'Not done';
	taskActive.addEventListener('click', () => {
		if (taskActive.style.backgroundColor == 'green') {
			taskActive.style.backgroundColor = 'red';
			taskActive.textContent = 'Not done';
		}
		else {
			taskActive.style.backgroundColor = 'green';
			taskActive.textContent = 'Done';
		}
		});
	const addNewTaskBtn = document.createElement('button');
	addNewTaskBtn.id = 'addNewTaskBtn';
	addNewTaskBtn.textContent = '+';
	addNewTaskBtn.addEventListener('click', () => {
		const taskNameValue = taskName.value;
		const dateNameValue = taskDate.value;
		const infoNameValue = taskInfo.value;
		const activeNameValue = taskActive.textContent;
		const values = [taskNameValue, dateNameValue, infoNameValue, activeNameValue];
		addTaskToProject(projects, values, i);
		projects.removeChild(addTaskHolder);
		});
	nameElement.appendChild(taskNameLabel);
	nameElement.appendChild(taskName);
	dateElement.appendChild(taskDateLabel);
	dateElement.appendChild(taskDate);
	infoElement.appendChild(taskInfoLabel);
	infoElement.appendChild(taskInfo);
	taskElement.appendChild(taskActiveLabel);
	taskElement.appendChild(taskActive);
	addTaskHolder.appendChild(nameElement);
	addTaskHolder.appendChild(dateElement);
	addTaskHolder.appendChild(infoElement);
	addTaskHolder.appendChild(taskElement);
	addTaskHolder.appendChild(addNewTaskBtn);
	projects.appendChild(addTaskHolder);
}

const addTaskToProject = (project, values, i) => {
	const tasksHeader = document.createElement('h3');
	tasksHeader.classList.add('projectInfoHeadings');
	tasksHeader.textContent = 'Tasks';
	const taskContainer = document.createElement('div');
	taskContainer.id = 'taskContainer' + k;
	taskContainer.classList.add('taskContainer');
	const taskName = document.createElement('p');
	const taskDate = document.createElement('p');
	const taskInfo = document.createElement('p');
	const taskActive = document.createElement('p');
	taskName.classList.add('taskListed');
	taskDate.classList.add('taskListed');
	taskInfo.classList.add('taskListed');
	taskActive.classList.add('taskListed');
	taskName.textContent = 'Name: ' + values[0];
	taskDate.textContent = 'Date: ' + values[1];
	if (values[2].length <= 40) {
		taskInfo.textContent = 'Description: ' + values[2];
	}
	else {
		taskInfo.textContent = 'Description: ' + values[2].slice(0, 40) + '...';
		const showMoreBtn = document.createElement('button');
		showMoreBtn.id = 'showMoreBtn';
		showMoreBtn.textContent = '+';
		showMoreBtn.addEventListener('click', () => {
			if (showMoreBtn.textContent == '+') {
				taskInfo.textContent = 'Description: ' + values[2];
				taskInfo.appendChild(showMoreBtn);
				showMoreBtn.textContent = '-';
			}
			else {
				taskInfo.textContent = 'Description: ' + values[2].slice(0, 40) + '...';
				taskInfo.appendChild(showMoreBtn);
				showMoreBtn.textContent = '+';
			}
		});
		taskInfo.appendChild(showMoreBtn);
	}
	const editTaskName = document.createElement('INPUT');
	editTaskName.classList.add('taskInputs');
	editTaskName.setAttribute('type', 'text');
	const editTaskDate = document.createElement('INPUT');
	editTaskDate.classList.add('taskInputs');
	editTaskDate.setAttribute('type', 'date');
	const editTaskInfo = document.createElement('TEXTAREA');
	editTaskInfo.id = 'taskInfoInput';
	editTaskName.value = values[0];
	editTaskDate.value = values[1];
	editTaskInfo.value = values[2];
	const editTask = document.createElement('button');
	editTask.classList.add('editTask');
	editTask.textContent = 'Edit';
	editTask.addEventListener('click', () => {
		applyChangesToTask.style.display = 'block';
		editTaskName.style.display = 'block';
		editTaskDate.style.display = 'block';
		editTaskInfo.style.display = 'block';
		taskName.textContent = 'Name: ';
		taskName.appendChild(editTaskName);
		taskDate.textContent = 'Date: ';
		taskDate.appendChild(editTaskDate);
		taskInfo.textContent = 'Description: ';
		taskInfo.appendChild(editTaskInfo);
		editTask.style.display = 'none';
	});
	const applyChangesToTask = document.createElement('button');
	applyChangesToTask.classList.add('editTask');
	applyChangesToTask.textContent = 'Apply Changes';
	applyChangesToTask.addEventListener('click', () => {
		editTaskName.style.display = 'none';
		editTaskDate.style.display = 'none';
		editTaskInfo.style.display = 'none';
		taskName.textContent = 'Name: ' + editTaskName.value;
		taskDate.textContent = 'Date: ' + editTaskDate.value;
		taskInfo.textContent = 'Description: ' + editTaskInfo.value;
		applyChangesToTask.style.display = 'none';
		editTask.style.display = 'block';
	});
	const removeTask = document.createElement('button');
	removeTask.id = 'removeTask' + k;
	removeTask.classList.add('removeTask');
	removeTask.textContent = 'X';
	taskActive.textContent = 'Status: ' + values[3];
	const taskActiveSwitch = document.createElement('button');
	taskActiveSwitch.id = 'taskActiveSwitch';
	taskActiveSwitch.textContent = '';
	const strike = document.createElement('div');
	strike.classList.add('strike');
	if (taskActive.textContent == 'Status: Not done') {
		taskActiveSwitch.style.backgroundColor = 'red';
		}
	else {
		taskActiveSwitch.style.backgroundColor = 'green';
		taskContainer.appendChild(strike);
		
	}
	taskActiveSwitch.addEventListener('click', () => {
		if (taskActive.textContent == 'Status: Not done') {
			taskActive.textContent = 'Status: Done';
			taskActiveSwitch.style.backgroundColor = 'green';
			taskActive.appendChild(taskActiveSwitch);
			taskContainer.appendChild(strike);
		}
		else {
			taskActive.textContent = 'Status: Not done';
			taskActiveSwitch.style.backgroundColor = 'red';
			taskActive.appendChild(taskActiveSwitch);
			taskContainer.removeChild(strike);
		}
	});
	taskActive.appendChild(taskActiveSwitch);
	taskContainer.appendChild(taskName);
	taskContainer.appendChild(taskDate);
	taskContainer.appendChild(taskInfo);
	taskContainer.appendChild(taskActive);
	taskContainer.appendChild(editTask);
	taskContainer.appendChild(applyChangesToTask);
	applyChangesToTask.style.display = 'none';
	taskContainer.appendChild(removeTask);
	allTasks[k] = taskContainer;
	k++;
	removeTask.addEventListener('click', () => {removeTasks(event.target.id, allTasks, project);});
	project.appendChild(taskContainer);
}

const removeTasks = (id, allTasks, project) => {
	console.log(id);
	const taskId = id.slice(10);
	const task = allTasks[taskId];
	console.log(task);
	project.removeChild(task);
};

export default mainContent;