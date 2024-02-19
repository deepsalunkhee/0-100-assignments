import { client } from "..";

interface Todo {
    title: string;
    description: string;
    done: boolean;
    id: number;
}

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string): Promise<Todo> {
    try {
        const { rows } = await client.query(
            `INSERT INTO todos (user_id, title, description, done) VALUES ($1, $2, $3, $4) RETURNING *`,
            [userId, title, description, false]
        );
        return rows[0];
    } catch (error) {
        throw new Error("Unable to create todo");
    }
}

/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number): Promise<Todo> {
    try {
        const { rows } = await client.query(
            `UPDATE todos SET done = true WHERE id = $1 RETURNING *`,
            [todoId]
        );
        return rows[0];
    } catch (error) {
        throw new Error("Unable to update todo");
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number): Promise<Todo[]> {
    try {
        const { rows } = await client.query(
            `SELECT * FROM todos WHERE user_id = $1`,
            [userId]
        );
        return rows;
    } catch (error) {
        throw new Error("Unable to get todos");
    }
}
