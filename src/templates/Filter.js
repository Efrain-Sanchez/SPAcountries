const Filter = () => {
    const view = `
    <div class="filter" > 
        <form class="filter__form" action="submit"> 
            <img src="./public/assets/search.png" alt="icon">
            <input type="text" placeholder="Search for a country"> 
         </form> 
         <label> Filter by Region
            <select class="filterForm__select" name="Filter by region" id="FilterRegion">
                    <option value="name"></option>
                    <option value="name"></option>
                    <option value="name"></option>
                    <option value="name"></option>
            </select>
        </label>
    </div>
    `;
    return view;
}

export default Filter;