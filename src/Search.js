// import {useState} from "react";
// import TodoList from "TodoList";


// const getFilteredItems = (query, ItemList) => {
//     if (!query) {
//         return ItemList;
//     }
//     return ItemList.filter(toDoItem => toDoItem.name.includes(query))
// }

export default function SearchBar() {
    // const [query, setQuery] = useState("");
    
    // const {ItemList} = TodoList;

    // const filteredItems = getFilteredItems(query, ItemList);

    return(
        <div className="search-bar">
            <input type="text" placeholder="search task here" />
            {/* <ul>
                {filteredItems.map(value => <h1 key = {value.name}>{value.name}</h1>)}
            </ul> */}
        </div>
    )
};