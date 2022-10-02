import React, { useState } from 'react';
import Add_Icon from '../assets/images/plus.png';
import Double_Tick_Icon from '../assets/images/double-tick.png';
import Notes_Icon from '../assets/images/notes.png'
import { useAddTodoMutation } from '../features/api/apiSlice';

const Header = () => {

  const [text, setText] = useState('');
  const [completed, setCompleted] = useState(false);

  const [addTodo, { isLoading, isSuccess, isError, error }] = useAddTodoMutation();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ text, completed });
    setText('');
    setCompleted('');
  }

    return (
     <div>
        <form class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
          onSubmit={handleSubmit}>
          <img src={Notes_Icon} class="w-6 h-6" alt="Add todo" />
          <input
            type="text"
            placeholder="Type your todo"
            class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
            value={text}
            onChange={(e)=> setText(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            class={`appearance-none w-8 h-8 bg-[url('${Add_Icon}')] bg-no-repeat bg-contain`}
          ></button>
        </form>

        {isSuccess && <h6 className='text-green-500'>Todo Added Successfully</h6>}

        {isError && <h6 className='text-red-500'>{ error }</h6>}

        <ul class="flex justify-between my-4 text-xs text-gray-500">
          <li class="flex space-x-1 cursor-pointer" >
            <img class="w-4 h-4" src={Double_Tick_Icon} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li class="cursor-pointer" >
            Clear completed
          </li>
        </ul>
     </div>
    );
};

export default Header;