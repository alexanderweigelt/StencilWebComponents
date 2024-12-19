# ToDo App - Frontend

This is the frontend application for the ToDo project, built using **Stencil.js**. It provides a modern, fast, and responsive interface to manage ToDo items by interacting with the backend REST API.

## Features

- **Fetch ToDos:** Retrieve and display ToDo items from the backend.
- **Reusable Components:** Built using Web Components for modularity and reusability.
- **Future Features:**
  - Add new ToDo items.
  - Mark ToDo items as completed.

---

## Project Structure

```plaintext
.
├── openapi-ts.config.cjs   # Configuration for API client generation
├── package.json            # Frontend dependencies and scripts
├── src                     # Source code for the app
│   ├── components          # Stencil components for the app
│   │   ├── todo-app        # Root component
│   │   └── todo-list       # Component to display the list of ToDos
│   ├── generated           # Auto-generated API client (via OpenAPI)
│   ├── global              # Global styles and configuration
│   ├── index.html          # Entry HTML file
│   └── index.ts            # Entry TypeScript file
├── stencil.config.ts       # Stencil configuration
└── tsconfig.json           # TypeScript configurationnables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).
```

## Development

### Run the Development Server

Start the development server and watch for file changes:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

## API Integration

This application uses a REST API provided by the backend package in the monorepo. The API client is auto-generated using OpenAPI specifications and located in the generated/client/ directory.
*	API Endpoint: http://localhost:3000/todos
*	Client Generation: Managed via openapi-ts.config.cjs.

### Example Usage in Code

The todo-list component fetches ToDo items using the API client:

```typescript
import { getTodos } from '../generated/client/sdk.gen';

async fetchTodos() {
  try {
    const todos = await getTodos();
    this.todos = todos;
  } catch (error) {
    console.error('Failed to fetch ToDos:', error);
  }
}
```

## Components

### `<todo-app>`

The root component of the application, providing the base layout and routing.

**Usage:**
```html
<todo-app></todo-app>
```

### `<todo-list>`

Displays a list of ToDo items fetched from the backend.

**Note:** Cannot be used outside the application 

## Development Notes

This application is a work in progress:
*	The current functionality includes fetching and displaying ToDo items from the backend API.
*	Upcoming features include adding new ToDos and marking existing ToDos as completed.
