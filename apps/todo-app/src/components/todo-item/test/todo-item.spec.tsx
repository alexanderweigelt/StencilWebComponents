import { newSpecPage } from '@stencil/core/testing';
import { TodoItem } from '../todo-item';
import { h } from '@stencil/core';
import { ToDo } from '../../../generated/client';

describe('todo-item', () => {
  const mockTodo: ToDo = {
    id: 1,
    dueDate: new Date().toLocaleString('de-DE'),
    completed: false,
    text: 'Test To-Do',
  };

  it('renders correctly when todo is open', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => <TodoItem todo={mockTodo} onToggle={() => {}} />,
    });

    expect(page.root).toEqualHtml(`
      <li>
        <ui-button>open</ui-button>
        <ui-text>Test To-Do</ui-text>
      </li>
    `);
  });

  it('renders correctly when todo is completed', async () => {
    const page = await newSpecPage({
      components: [],
      template: () => (
        <TodoItem
          todo={{ ...mockTodo, completed: true }}
          onToggle={() => {}}
        />
      ),
    });

    expect(page.root).toEqualHtml(`
      <li class="completed">
        <ui-button>complete</ui-button>
        <ui-text>Test To-Do</ui-text>
      </li>
    `);
  });

  it('calls onToggle when button is clicked', async () => {
    const onToggleMock = jest.fn();

    const page = await newSpecPage({
      components: [],
      template: () => <TodoItem todo={mockTodo} onToggle={onToggleMock} />,
    });

    const button = page.root.querySelector('ui-button');
    const buttonEvent = new Event('click');
    button.dispatchEvent(buttonEvent);

    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });
});
