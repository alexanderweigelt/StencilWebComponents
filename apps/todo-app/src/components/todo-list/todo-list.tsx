import { Component, h, Host, State, Fragment } from '@stencil/core';
import { getTodos } from '../../generated/client';
import type { ToDo } from '../../generated/client';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {
  @State() todos: ToDo[] = [];
  @State() errorMessage: string | null = null;
  @State() loading: boolean = false;
  @State() initial: boolean = true;

  async fetchTodos() {
    this.loading = true;
    this.errorMessage = null;

    try {
      const response = await getTodos({baseUrl: 'http://localhost:3000'});
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
  }

  renderTodoList() {
    if (this.todos.length === 0) {
      return <p>No ToDos found.</p>;
    }

    return (
      <ul>
        {this.todos.map((todo) => (
          <li key={todo.id}>
            <ui-button onClick={() => console.log(`Done: ${todo.id}`)}>
              done
            </ui-button>
            <ui-text>{todo.title}</ui-text>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <Host>
        {this.initial
          ? <ui-button name={'loading'} type={'button'} onClick={() => {this.fetchTodos(); this.initial = false}} disabled={this.loading}>
            {this.loading ? 'Loading...' : 'Start the Application'}
          </ui-button>
          : <Fragment>
            {this.loading && <p>ToDos are loaded...</p>}
            {!this.loading && this.errorMessage && <p class="error">{this.errorMessage}</p>}
            {!this.loading && !this.errorMessage && this.renderTodoList()}
          </Fragment>
        }
      </Host>
    );
  }
}
