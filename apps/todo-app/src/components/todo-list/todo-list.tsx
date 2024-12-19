import { FunctionalComponent, h } from '@stencil/core';
import { TodoItem } from '../todo-item/todo-item';
import { ToDo } from '../../generated/client'

interface TodoListProps {
  todos: ToDo[];
  toggleTodo: (id: number) => void;
}

export const TodoList: FunctionalComponent<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem todo={todo} onToggle={() => toggleTodo(todo.id)}></TodoItem>
      ))}
    </ul>
  );
};
