import { Component, h } from '@stencil/core';

import 'ui/dist/todo-ui/todo-ui.esm.js'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <ui-headline>ToDo App</ui-headline>
        </header>

        <main>
          <todo-list></todo-list>
        </main>
      </div>
    );
  }
}
