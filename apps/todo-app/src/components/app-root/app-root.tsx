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
          <p><strong>Note:</strong> This application is currently under development. At this stage, the functionality to fetch and display ToDo items from the backend is implemented successfully.
            <br/>
            Future updates will include the ability to add new ToDo items and mark existing ones as completed. These features are planned and will be integrated in upcoming iterations. Stay tuned for more updates!</p>
          <todo-list></todo-list>
        </main>
      </div>
    );
  }
}
