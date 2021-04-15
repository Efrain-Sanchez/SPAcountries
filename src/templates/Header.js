const Header = () =>{
    const view = `
        <a class="Header__logo" href="/">
            Where in the world?
        </a>

        <a class="Header__darkMode" href="/">
            <img src="./public/assets/night.png" alt="moon icon">
            <h4 class="text">Dark mode</h4>
        </a> 
    `;
    return view;
}

export default Header;