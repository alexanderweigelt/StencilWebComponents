// This file is auto-generated by @hey-api/openapi-ts

export type NewToDo = {
    /**
     * Der Titel des ToDo-Elements.
     */
    text: string;
    /**
     * Markiert das ToDo-Element als erledigt.
     */
    completed: boolean;
    /**
     * Das Fälligkeitsdatum des ToDo-Elements.
     */
    dueDate: string;
};

export type ToDo = {
    /**
     * Die eindeutige ID des ToDo-Elements.
     */
    id: number;
    /**
     * Der Titel des ToDo-Elements.
     */
    text: string;
    /**
     * Markiert das ToDo-Element als erledigt.
     */
    completed: boolean;
    /**
     * Das Fälligkeitsdatum des ToDo-Elements.
     */
    dueDate: string;
};

export type GetTodosResponse = (Array<ToDo>);

export type GetTodosError = unknown;

export type PostTodosData = {
    body: NewToDo;
};

export type PostTodosResponse = (ToDo);

export type PostTodosError = unknown;

export type GetTodosByIdData = {
    path: {
        /**
         * Die ID des ToDo-Elements.
         */
        id: number;
    };
};

export type GetTodosByIdResponse = (ToDo);

export type GetTodosByIdError = (unknown);

export type PutTodosByIdData = {
    body: NewToDo;
    path: {
        /**
         * Die ID des ToDo-Elements.
         */
        id: number;
    };
};

export type PutTodosByIdResponse = (ToDo);

export type PutTodosByIdError = (unknown);

export type DeleteTodosByIdData = {
    path: {
        /**
         * Die ID des ToDo-Elements.
         */
        id: number;
    };
};

export type DeleteTodosByIdResponse = (void);

export type DeleteTodosByIdError = (unknown);