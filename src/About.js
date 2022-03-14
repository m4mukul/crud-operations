import React, { useState } from "react";
function TodoCount({ todos }) {
    return <div>Total Todos: {todos.length}</div>;
  }
  
  function TodoList({ todos }) {
    
  
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    );
  }
  
  function AddTodo({ setTodos }) {
    function handleSubmit(event) {
      event.preventDefault();
      const todo = event.target.elements.todo.value;
      setTodos(prevTodos => [...prevTodos, todo]);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" id="todo" />
        <button type="submit">Add Todo</button>
      </form>
    );
  }

function About(){
    const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3", "item 4"]);
        const [text, setText] = useState('');
        const [ltext, setlText] = useState('');
        const [stext, setsText] = useState('coconut');
        const oninputChange = (e) =>{
            setText(e.target.value);
            
        }
        const oninputlChange = (e) =>{
            
            setlText(e.target.value);
        }
        const selectChanges = (e) =>{
            
            setsText(e.target.value);
        }
        const onSubmit = () =>{
            // if (text >= 100) {
            //     alert("The water would boil.")
            //   }else{
            //     alert("The water would not boil.")
            //   }
            alert("In fahrenheit : " + (text - 32) * 5 / 9 + " In celsius  : " + (ltext * 9 / 5) + 32 + " " + stext);
         
        }
        
    return(
        <>
         <TodoCount todos={todos} />
      <TodoList todos={todos} />
      <AddTodo setTodos={setTodos} />   
        </>
    //     <div className="max-w-screen-md mx-auto p-5">
    //     <div className="text-center mb-16">
    //     <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
    //         Contact
    //         </p>
    //         <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
    //         Get In <span className="text-indigo-600">Touch</span>
    //         </h3>
    //     </div>
        
    //     <form className="w-full" onSubmit={onSubmit}>
    //     <div className="flex flex-wrap -mx-3 mb-6">
    //     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    //         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
    //         First Name
    //         </label>
    //         <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" onChange={oninputChange}  placeholder="Janve"  />
    //         <select value={stext} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" onChange={selectChanges}>
    //         <option value="grapefruit">Grapefruit</option>
    //         <option value="lime">Lime</option>
    //         <option value="coconut">Coconut</option>
    //         <option value="mango">Mango</option>
    //       </select>
    //     </div>
    //     <div className="w-full md:w-1/2 px-3">
    //         <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
    //         Last Name
    //         </label>
    //         <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" onChange={oninputlChange} type="text"  placeholder="Doe" />
    //     </div>
    //     </div>
       
        
    //     <div className="flex flex-wrap -mx-3 mb-6">
        
    //     <div className="flex justify-between w-full px-3">
    //     <div className="md:flex md:items-center">
    //         <label className="block text-gray-500 font-bold">
    //             <input  className="mr-2 leading-tight" type="checkbox" />
    //             <span className="text-sm">
    //             Send me your newsletter!
    //             </span>
    //         </label>
    //         </div>
    //         <button className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"  type="submit">
    //         submit
    //         </button>
    //     </div>
            
    //     </div>
        
    // </form>
    // </div>
    )
}
export default About;