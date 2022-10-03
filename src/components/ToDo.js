import React from 'react';
import Cancel_Icon from '../assets/images/cancel.png'
import { useAddTodoMutation, useEditTodoMutation } from '../features/api/apiSlice';

const ToDo = ({ todo }) => {
    
    const {id, text, completed, color } = todo;

    const [editTodo, { isLoading, isSuccess, isError, error }] = useEditTodoMutation();

      const handleStatusChanged = () => {
        editTodo({ id, data: {completed: !completed} });
      }

      const handleColorChanged = (color) => {
        editTodo({ id, data: { color: color } });
      };

    return (
      <form>
        <div class="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
          <div
            //   class={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
            //     completed && "border-green-500 focus-within:border-green-500"
            //   }`}
            class={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
              completed && "border-green-500 focus-within:border-green-500"
            }`}
          >
            <input
              type="checkbox"
              class="opacity-0 absolute rounded-full"
              checked={completed}
              onChange={() => handleStatusChanged()}
            />
            {completed && (
              <svg
                class="fill-current w-3 h-3 text-green-500 pointer-events-none"
                viewBox="0 0 20 20"
              >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
              </svg>
            )}
          </div>

          <div class={`select-none flex-1 ${completed && "line-through"}`}>
            {text}
          </div>

          <div
            class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
              color === "green" && "bg-green-500"
            }`}
            onClick={() => handleColorChanged("green")}
          ></div>

          <div
            class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
              color === "yellow" && "bg-yellow-500"
            }`}
            onClick={() => handleColorChanged("yellow")}
          ></div>

          <div
            class={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
              color === "red" && "bg-red-500"}`}
            onClick={() => handleColorChanged("red")}
          ></div>

          <button className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
            Edit
          </button>

          <img
            src={Cancel_Icon}
            class="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
            alt="Cancel"
            //   onClick={() => handleDelete(id)}
          />
        </div>
      </form>
    );
};

export default ToDo;