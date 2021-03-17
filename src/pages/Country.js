import getData from '../utils/getData';
import getHash from '../utils/getHash';
const Country = async () =>{
    const countryName = getHash();
    const countries = await getData(countryName); 
    const country = countries[0]; 
    console.log(country);
    const view = `
        <a href="/" id="backbtn" class="backbtn"> Back </a>
        <div class="Country" >
            <img src="${country.flag}" alt="bandera">
            <article class="Country__description">
                <h2>${country.name}</h2>
                <h3>Native name: ${country.nativeName}</h3>
                <h3>Population: ${country.population}</h3>
                <h3>Region: ${country.region}</h3>
                <h3>Capital: ${country.capital}</h3>
                <h3>Currencies: ${country.currencies}</h3>
                <h3>Languages:${country.languages[0].name}</h3>
                <div> 
                <h3>Border Countries:</h3>
                <h4> ${country.borders[0]}</h4>
                <h4> ${country.borders[1]}</h4>
                <h4> ${country.borders[2]}</h4>
                </div>
            </article>
        </div>
    `;
    return view;
}

export default Country;