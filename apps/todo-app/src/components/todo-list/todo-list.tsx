import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'todo-list',
  styleUrl: 'todo-list.css',
  shadow: true,
})
export class TodoList {
  @State() todos: any[] = [];
  @State() errorMessage: string | null = null;
  @State() loading: boolean = false;

  async fetchTodos() {
    this.loading = true;
    this.errorMessage = null;

    try {
      const response = await new Promise<{ data: any[] }>((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5
            ? resolve({ data: [{ id: 1, title: 'Sample ToDo' }] })
            : reject(new Error('Fehler beim Laden der ToDos.'));
        }, 1000);
      });

      this.todos = response.data;
    } catch (error) {
      this.errorMessage = error.message || 'Unbekannter Fehler';
    } finally {
      this.loading = false;
    }
  }

  renderTodoList() {
    if (this.todos.length === 0) {
      return <p>Keine ToDos gefunden.</p>;
    }

    return (
      <ul>
        {this.todos.map((todo) => (
          <li key={todo.id}>
            <ui-button onClick={() => console.log(`Bearbeiten: ${todo.id}`)}>
              ToDo bearbeiten
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
        <ui-button name={'loading'} type={'button'} onClick={() => this.fetchTodos()} disabled={this.loading}>
          {this.loading ? 'Laden...' : 'ToDo jetzt ansehen'}
        </ui-button>

        {this.loading && <p>ToDos werden geladen...</p>}
        {!this.loading && this.errorMessage && <p class="error">{this.errorMessage}</p>}
        {!this.loading && !this.errorMessage && this.renderTodoList()}
      </Host>
    );
  }
}
