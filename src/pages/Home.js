import getData from '../utils/getData';

const Home = async () =>{
    const countries = await getData();
    console.log(countries);
    const view = `
    
    <div class="Countries">
    ${countries.map((country) => `
        <article class="Countries__country">
            <a href="#/${country.name}">
                <img src="${country.flag}" alt="${country.name}">
                <h3>${country.name}</h3>
                <h4>Population: <span>${country.population}</span></h4>
                <h4>Region: <span>${country.region}</span></h4>
                <h4>Capital: <span>${country.capital}</span></h4>
            </a>    
        </article>
    `
        )
        .join('')}
    </div>
    `;
    return view;
}

export default Home;