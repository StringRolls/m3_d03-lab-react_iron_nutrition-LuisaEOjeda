import { useState } from 'react';

export default function Search (props){

    const [search, setSearch] = useState("");

    function handleSearchFoods(e) {
        setSearch(e.target.value);

        props.match(e.target.value)
    }

    return(
        <form>
            <label>Search</label>
            <input name='search' value={search} type='text' onChange={handleSearchFoods} />
        </form>
    )
}
