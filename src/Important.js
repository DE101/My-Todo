import TodoList from "./TodoList"

export default function Important ({todos}) {

    const importantList = todos.filter(todos => todos.important === true)
    
    return (
        <div>
            <h1>
                Important Tasks
            </h1>
                <TodoList 
                // {...importantList}
                />
            
        </div>
    )
}