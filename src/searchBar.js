import {useState} from "react";


export default function searchBar() {
    const [query, setQuery] = useState;
constS

    return(
        <div>
            <label>Search:</label>
            <input type="text" placeholder="search task here" onChange={e => setQuery(e.target.value)}/>
            <input type="button"/>
        </div>
    )
};