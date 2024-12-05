Hier ist die vollständige README im Markdown-Format, die du direkt in eine Datei README.md kopieren kannst:

# ToDo API Server

A simple Node.js server for serving a ToDo REST API. This project demonstrates how to create an API endpoint that returns a list of ToDos sorted by date in ascending order.

## Features

- **GET `/todos`:** Returns a list of ToDos in JSON format.
- Uses **Express** as the web server framework.
- Mock data is stored in a `todos.json` file.

## Mock Data

The mock data is stored in the todos.json file:
```json
[
{
"id": 1,
"title": "Submit project proposal",
"dueDate": "2023-12-03"
},
{
"id": 2,
"title": "Team meeting",
"dueDate": "2023-12-04"
},
{
"id": 3,
"title": "Prepare presentation",
"dueDate": "2023-12-05"
},
{
"id": 4,
"title": "Final report submission",
"dueDate": "2023-12-06"
}
]
```

This data is returned by the /todos endpoint when requested.

## Usage

1. Start the Server

Run the following command to start the server:

``npm start``

By default, the server will run at http://localhost:3000.

## API Endpoint

GET /todos

•	Description: Returns a list of ToDos sorted by dueDate in ascending order.
•	Response:
•	200 OK: A JSON array of ToDo objects.
•	500 Internal Server Error: If the mock data cannot be read.

Example Response
```
[
{
"id": 1,
"title": "Submit project proposal",
"dueDate": "2023-12-03"
},
{
"id": 2,
"title": "Team meeting",
"dueDate": "2023-12-04"
},
{
"id": 3,
"title": "Prepare presentation",
"dueDate": "2023-12-05"
},
{
"id": 4,
"title": "Final report submission",
"dueDate": "2023-12-06"
}
]
```

## Test the API

You can test the API using any HTTP client like curl, Postman, or a browser.

Using curl:

```shell
curl http://localhost:3000/todos
```

## Project Structure

```
project/
├── server.js           # Main server file
├── todos.json          # Mock data file
├── package.json        # npm project file
└── package-lock.json   # Auto-generated dependency file
```

## Dependencies

•	Express: Web server framework for Node.js.

## Notes

•	The server uses mock data from todos.json. In a real-world scenario, this data would come from a database or external API.
•	The ToDos are pre-sorted by dueDate in ascending order.

## Future Enhancements

•	Add more endpoints (e.g., POST, PUT, DELETE).
•	Implement database support (e.g., MongoDB, PostgreSQL).
•	Add authentication and authorization.
