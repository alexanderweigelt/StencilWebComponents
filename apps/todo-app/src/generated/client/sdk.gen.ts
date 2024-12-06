// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type OptionsLegacyParser } from '@hey-api/client-fetch';
import type { GetTodosError, GetTodosResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Hole eine Liste aller ToDos
 * Gibt eine Liste von ToDo-Elementen zurück, sortiert nach Datum (aufsteigend).
 */
export const getTodos = <ThrowOnError extends boolean = false>(options?: OptionsLegacyParser<unknown, ThrowOnError>) => {
    return (options?.client ?? client).get<GetTodosResponse, GetTodosError, ThrowOnError>({
        ...options,
        url: '/todos'
    });
};