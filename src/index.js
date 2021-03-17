import router from './routes/index';
import search from '../src/utils/search'
import "./styles/main.scss";
import "./styles/mediaqueries.scss"

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

