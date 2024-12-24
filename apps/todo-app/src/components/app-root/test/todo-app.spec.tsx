jest.mock('../../../generated/client')

import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { TodoApp } from '../todo-app';
import { ToDo, getTodos, postTodos } from '../../../generated/client';

describe('TodoApp Web-Component', () => {
  let page: SpecPage
  let instance: TodoApp;
  let mockToDos: ToDo[];

  beforeEach(async () => {
    page = await newSpecPage({
      components: [TodoApp],
      html: `<todo-app></todo-app>`,
    })
    await page.waitForChanges();
    instance = page.rootInstance
    mockToDos = [
      { id: 1, text: 'Learn Stencil', dueDate: '20.12.2024, 17:40:45', completed: false },
      { id: 2, text: 'Write Tests', dueDate: '24.12.2024, 18:45:48', completed: true },
    ];
  })

  it('renders the app correctly', async () => {
    (getTodos as jest.Mock).mockReturnValueOnce({ data: mockToDos });

    await page.rootInstance.componentWillLoad();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('adds a new todo correctly', async () => {
    const mockNewTodo = { id: 3, text: 'New ToDo', completed: false, dueDate: '28.12.2024, 12:30:33' };
    (postTodos as jest.Mock).mockResolvedValueOnce({ data: mockNewTodo });

    instance.newTodoText = 'New ToDo';
    await instance.addTodo();
    await page.waitForChanges();

    expect(instance.todos).toContainEqual(mockNewTodo);
    expect(instance.newTodoText).toBe('');
  });

  it('toggles a todo status correctly', () => {
    instance.todos = mockToDos;

    instance.toggleTodo(1);
    expect(instance.todos[0].completed).toBe(true);
    expect(instance.todos[1].completed).toBe(true);
  });

  it('renders loading state correctly', async () => {
    instance.errorMessage = null;
    instance.loading = true;
    await page.waitForChanges();

    const loadingText = page.root.shadowRoot.querySelector('.loading');
    expect(loadingText.textContent).toBe('ToDos list are loaded...');
  });

  it('handles fetchTodos success state', async () => {
    (getTodos as jest.Mock).mockReturnValueOnce({ data: mockToDos });

    await instance.fetchTodos();
    await page.waitForChanges();

    expect(instance.todos).toEqual(mockToDos);
    expect(instance.loading).toBe(false);
    expect(page.root.shadowRoot.querySelector('.loading')).toBeNull();
  });

  it('handles fetchTodos error state', async () => {
    (getTodos as jest.Mock).mockReturnValueOnce(new Error('API Error'));

    await instance.fetchTodos();
    await page.waitForChanges();

    expect(instance.todos).toEqual([]);
    expect(instance.errorMessage).toBe('Unexpected API response format');
    expect(page.root.shadowRoot.querySelector('.loading')).toBeNull();
    const errorText = page.root.shadowRoot.querySelector('.error');
    expect(errorText.textContent).toBe('Unexpected API response format');
  });

  it('shows loading animation while fetching todos', async () => {
    (getTodos as jest.Mock).mockImplementation(() => {
      return new Promise(resolve =>
        setTimeout(() => resolve({ data: mockToDos }), 50)
      );
    });

    instance.fetchTodos();
    await page.waitForChanges();

    expect(instance.loading).toBe(true);
    const loadingText = page.root.shadowRoot.querySelector('.loading');
    expect(loadingText).not.toBeNull();
    expect(loadingText.textContent).toBe('ToDos list are loaded...');

    // Waiting for the completion of `fetchTodos`
    await new Promise(resolve => setTimeout(resolve, 60));

    expect(instance.loading).toBe(false);
    expect(instance.errorMessage).toBeNull();
  });

  it('removes loading animation after error', async () => {
    (getTodos as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    await instance.fetchTodos();
    await page.waitForChanges();

    expect(instance.loading).toBe(false);
    expect(instance.errorMessage).toBe('API Error');
    const loadingText = page.root.shadowRoot.querySelector('.loading');
    expect(loadingText).toBeNull();
  });
});
