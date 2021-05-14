const body = document.querySelector('body');
const container = document.createElement('div');
container.id = 'interfaceContainer';
const contentContainer = document.createElement('div');
contentContainer.id = 'contentContainer';

const contentLoader = () => {
	body.appendChild(container);
	body.appendChild(contentContainer);
	container.appendChild(contentContainer);
}
const content = () => {
	return contentContainer;
}


export {contentLoader, content};