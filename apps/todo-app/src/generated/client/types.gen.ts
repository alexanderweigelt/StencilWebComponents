// This file is auto-generated by @hey-api/openapi-ts

export type ToDo = {
    /**
     * Die eindeutige ID des ToDo-Elements.
     */
    id: number;
    /**
     * Der Titel des ToDo-Elements.
     */
    title: string;
    /**
     * Das Fälligkeitsdatum des ToDo-Elements.
     */
    dueDate: string;
};

export type GetTodosResponse = (Array<ToDo>);

export type GetTodosError = unknown;