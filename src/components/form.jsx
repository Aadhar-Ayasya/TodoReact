import React from 'react'

const Form = ({setInputText,todos,setTodos,inputText}) => {
    const inputTextHandler= e =>{
        setInputText(e.target.value)
    }
    
const submitHandler= e =>{
    e.preventDefault();
    setTodos([...todos
    ,{text:inputText,completed:false,id:Math.random()*1000}]);
    setInputText('');
}
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler}  type="text" className="todo-input" />
      <button className="todo-button" onClick={submitHandler}  type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

    </form>
  )
}

export default Form