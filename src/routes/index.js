import Header from '../templates/Header';
import Filter from '../templates/Filter';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Country from '../pages/Country';
import resolveRoutes from '../utils/resolveRoutes';
import getHash from '../utils/getHash';

const routes = {
    '/': Home ,
    '/name/:name': Country,
    '/Contact': 'Contact'
}

const router = async () => {
    const $Header = null || document.getElementById('Header');
    const $Filter = null || document.getElementById('Filter');
    const $Home = null || document.getElementById('Home');

    $Header.innerHTML = await Header(); 
    $Filter.innerHTML = await Filter();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    
    $Home.innerHTML = await render();
}

export default router;