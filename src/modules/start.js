import loader from './loader';

const body = document.querySelector('body');

const descText = 'A simple todo list webapp that will help get your life organized.';

const startPage = (() => {
	const container = document.createElement('div');
	container.id = 'startPageContainer';
	const title = document.createElement('h1');
	title.id = 'title';
	title.textContent = 'The ToDo List';
	container.appendChild(title);
	const desc = document.createElement('p');
	desc.id = 'startPageDesc';
	desc.textContent = descText;
	container.appendChild(desc);
	const startBtn = document.createElement('button');
	startBtn.id = 'startBtn';
	startBtn.textContent = 'Start';
	startBtn.addEventListener('click', () => {body.removeChild(container); loader();});
	container.appendChild(startBtn);
	body.appendChild(container);
})();

export default startPage;