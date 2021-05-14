import {contentLoader, content} from './interface';
import mainContent from './mainPage';

const loader = () => {
	contentLoader();
	mainContent();
}

export default loader;