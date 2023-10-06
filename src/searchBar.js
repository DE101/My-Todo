import {useState} from "react";
import {itemList} from "TodoList";

export default function searchBar() {
    const [query, setQuery] = useState;
    
    const {items} = itemList;

    return(
        <div>
            <label>Search:</label>
            <input type="text" placeholder="search task here" onChange={e => setQuery(e.target.value)}/>
            <input type="button"/>
        </div>
    )
};