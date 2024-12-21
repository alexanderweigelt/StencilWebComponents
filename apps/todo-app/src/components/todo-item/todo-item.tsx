import { FunctionalComponent, h } from '@stencil/core';
import { ToDo } from '../../generated/client';

interface TodoItemProps {
  todo: ToDo;
  onToggle: () => void;
}

export const TodoItem: FunctionalComponent<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li class={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <ui-button onClick={onToggle}>
        {todo.completed ? 'complete' : 'open'}
      </ui-button>
      <ui-text>{todo.text}</ui-text>
    </li>
  );
};
