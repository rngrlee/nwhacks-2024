const Timeline = () => {

    return (
        <>
            <NewTodoForm onSubmit={addTodo} />
            <h1 className="header">Todo List</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
    )
}

export default Profile