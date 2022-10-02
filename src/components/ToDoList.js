import React from 'react';
import { useGetTodosQuery } from '../features/api/apiSlice';
import ToDo from './ToDo';

const ToDoList = () => {

    const { data: todos, isLoading, isError, error } = useGetTodosQuery();
    
    let content = null;

    if (isLoading) {
        content = <p>Loading</p>
    }

    if (!isLoading && isError) {
        content = <p>{ error }</p>
    }

     if (!isLoading && !isError && todos.length === 0) {
        content = <p>There are no todo found !!</p>
    }

    if (!isLoading && !isError && todos.length > 0) {
        content = todos.map((todo) => <ToDo key={todo.id} todo={ todo } />)
    }

    return (
      <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
       
            {content}

      </div>
    );
};

export default ToDoList;