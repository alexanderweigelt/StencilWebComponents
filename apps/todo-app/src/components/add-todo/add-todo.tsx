import { FunctionalComponent, h } from '@stencil/core';

interface AddTodoProps {
  handleInputChange: (event: Event) => void;
  addTodo: () => void;
  newTodoText: string;
}

export const AddTodo: FunctionalComponent<AddTodoProps> = ({ handleInputChange, addTodo, newTodoText }) => {
  function handleSubmit(event: Event) {
    event.preventDefault()
    addTodo()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="new-todo"
        placeholder="Add a todo"
        value={newTodoText}
        onInput={handleInputChange}
      />
      <button>Add Todo</button>
    </form>

  );
};



