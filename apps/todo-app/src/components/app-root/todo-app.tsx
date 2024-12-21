import { Component, Fragment, h, State, JSX, Host } from '@stencil/core';
import { getTodos, postTodos, ToDo } from '../../generated/client';
import { TodoList } from '../todo-list/todo-list';
import { AddTodo } from '../add-todo/add-todo';

@Component({
  tag: 'todo-app',
  styleUrl: 'todo-app.css',
  shadow: true,
})
export class TodoApp {
  @State() errorMessage: string | null = null;
  @State() loading: boolean = false;
  @State() todos: ToDo[] = [];
  @State() newTodoText: string = '';

  componentWillLoad() {
    this.fetchTodos();
  }

  /**
   * Saves a new ToDo
   */
  addTodo = async () => {
    if (this.newTodoText.trim() === '') return;

    try {
      const response = await postTodos({
        baseUrl: 'http://localhost:3000',
        body: { dueDate: Date.now().toLocaleString('de-DE'), text: this.newTodoText.trim(), completed: false },
      });
      this.todos = [...this.todos, response.data];
      this.newTodoText = '';
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'An error occurred';
    } finally {
      this.loading = false;
    }
  };

  /**
   * Toggles a ToDo between done or open
   * @todo Add API fetch to save the todo state in a further step
   * @param id
   */
  toggleTodo = (id: number) => {
    // should fetch the ToDo API to set item as completed
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
  };

  /**
   * Fetch ToDo API and returns a list of todos
   */
  fetchTodos = async () => {
    this.loading = true;
    this.errorMessage = null;

    try {
      const response = await getTodos({ baseUrl: 'http://localhost:3000' });
      if (Array.isArray(response.data)) {
        this.todos = response.data;
      } else {
        throw new Error('Unexpected API response format');
      }
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'An error occurred';
    } finally {
      this.loading = false;
    }
  };

  handleInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.newTodoText = input.value;
  };

  private renderToDoApp = (): JSX.Element => {
    return (
      <Fragment>
        <TodoList todos={this.todos} toggleTodo={this.toggleTodo} />
        <AddTodo addTodo={this.addTodo} newTodoText={this.newTodoText} handleInputChange={this.handleInputChange} />
      </Fragment>
    );
  };

  render() {
    return (
      <Host>
        <header>
          <ui-headline>ToDo App</ui-headline>
        </header>

        <main>
          {this.loading && <p>ToDos list are loaded...</p>}
          {!this.loading && this.errorMessage && <p class="error">{this.errorMessage}</p>}
          {!this.loading && !this.errorMessage && this.renderToDoApp()}
        </main>
      </Host>
    );
  }
}
