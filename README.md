# Building Web Components with Stencil.js

This is an example project for the creation of a stand-alone web component with Stencil.

## Monorepo ToDo App

Building a modern web application with Stencil.js for Web Components and a Node.js-based REST API backend. This project uses a monorepo architecture managed by Lerna to streamline the development of multiple interconnected packages.

#### Frontend: ToDo App

**Description**

The frontend is a modern web application developed with StencilJS. It calls the API, displays ToDo lists and allows you to edit individual tasks.

Advantages of StencilJS

- Web standards: Generates native web components that can be used universally.
- Shadow DOM: Enables encapsulated and isolated styles.
- Flexibility: Can be used with any framework or native JavaScript.

Disadvantages of StencilJS

- Component nesting: The lack of component imports makes refactorings more difficult.
- High overhead for deep structures: Stencil can be impractical for complex, nested architectures such as “Think in Components”.
- No built-in routing: External solutions such as Stencil Router must be integrated.

### Features

*	Full Web Application: Combines a REST API backend and a Stencil.js-based frontend.
*	Reusable Components: Shared UI library for consistency across projects.
*	Monorepo Management: Efficiently manages apps and packages using Lerna and workspaces.
*	Standardized API Design: OpenAPI-compliant backend for clear communication between frontend and backend.

### Project Structure

```
├── LICENSE            # Project license
├── README.md          # Main project documentation
├── apps
│   ├── backend        # REST API backend (Node.js + Express)
│   │   ├── package.json
│   │   ├── server.js
│   │   ├── todo-api.yaml
│   │   └── todos.json
│   └── todo-app       # Frontend application (Stencil.js)
│       ├── package.json
│       ├── src
│       ├── stencil.config.ts
│       └── tsconfig.json
├── lerna.json         # Lerna configuration for monorepo
├── package-lock.json  # Root dependency lock file
├── package.json       # Root package configuration
└── packages
└── ui             # Shared UI library (Stencil.js)
├── package.json
├── src
├── stencil.config.ts
└── tsconfig.json
```

### Installation

#### Prerequisites

*	Node.js (v16 or higher)
*	npm (v7 or higher)

#### Steps

1.	Clone the repository:

```
git clone git@github.com:alexanderweigelt/StencilWebComponents.git monorepo-todo-app
cd monorepo-todo-app
```

2.	Install dependencies:

`npm install`

3.	Bootstrap the monorepo:
_Lerna will link dependencies across workspaces and install all required packages._

`npx lerna bootstrap`

### Running the Project

#### Commands

*	Build all packages: Build all apps and packages within the monorepo.

`npm run build`

*	Start all apps: Start the backend and frontend apps simultaneously.

`npm run start`

*	Run tests: Execute tests for all workspaces.

`npm run test`

### Running Individual Apps

**Backend**: 

Navigate to the backend folder and start the API server:
```
cd apps/backend
npm start
```
The server will run at http://localhost:3000.

**Frontend:**

Navigate to the frontend folder and start the development server:

```
cd apps/todo-app
npm start
```

### Features by Application

#### Backend: REST API

The backend is a simple Node.js server built with Express. It provides a REST API to manage ToDo items. 

Endpoint:
*	GET /todos: Returns a sorted list of ToDos (ascending by date).
*	Mock Data: The mock data is stored in todos.json and returned by the /todos endpoint.

#### Frontend: ToDo App

The frontend is built with Stencil.js, using Web Components to create a reusable and modern UI.
*	Advantages of Stencil.js:
*	Creates native Web Components.
*	Supports Shadow DOM for encapsulated styles.
*	Framework-agnostic components that can be reused across projects.
*	Challenges with Stencil.js:
*	Lack of explicit imports for component dependencies can make refactoring harder.
*	Deeply nested components can increase complexity.

#### Shared UI Library

The ui package contains shared components built with Stencil.js for consistent styling and behavior across applications.

Development Philosophy

*	Monorepo Benefits:
*	Centralized management of all related apps and packages.
*	Simplified dependency management with shared libraries.
*	Component-Based Design:
*	Reusable components are defined in the ui library and integrated across projects.

### Future Enhancements

*	Add more endpoints to the backend (POST, PUT, DELETE).
*	Introduce database support (e.g., MongoDB, PostgreSQL) for persistent ToDos.
*	Expand the UI library with additional reusable components.
*	Implement authentication and user management.


