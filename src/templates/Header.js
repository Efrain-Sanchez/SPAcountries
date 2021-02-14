const Header = () =>{
    const view = `
    <div class="Header">
        <a class="Header__logo" href="/">
            Where in the world?
        </a>

        <a class="Header__darkMode" href="/">
            <img src="./public/assets/night.png" alt="moon icon">
            Dark mode
        </a> 
    </div>
    `;
    return view;
}

export default Header;