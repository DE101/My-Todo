import {useState} from "react";
import {itemList} from "TodoList";


const getFilteredItems = (query, items) => {
    if (!query) {
        return items;
    }
    return items.filter(toDoItem => toDoItem.name.includes(query))
}

export default function searchBar() {
    const [query, setQuery] = useState;
    
    const {items} = itemList;

    const filteredItems = getFilteredItems(items, query)

    return(
        <div>
            <label>Search:</label>
            <input type="text" placeholder="search task here" onChange={e => setQuery(e.target.value)}/>
            <input type="button"/>
            <ul>

            </ul>
        </div>
    )
};