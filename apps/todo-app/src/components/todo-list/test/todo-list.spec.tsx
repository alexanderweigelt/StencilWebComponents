import { newSpecPage } from '@stencil/core/testing';
import { TodoList } from '../todo-list';
import { h } from '@stencil/core';

describe('ToDoList Component', () => {
  const mockTodos = [
    { id: 1, text: 'Learn Stencil', dueDate: '20.12.2024, 17:40:45', completed: false },
    { id: 2, text: 'Write Tests', dueDate: '24.12.2024, 18:45:48', completed: true },
  ];

  it('matches the snapshot with todos', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => <TodoList todos={mockTodos} toggleTodo={() => {
      }} />,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('matches the snapshot with an empty todos array', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => <TodoList todos={[]} toggleTodo={() => {
      }} />,
    });

    expect(page.root).toMatchSnapshot();
  });
});
