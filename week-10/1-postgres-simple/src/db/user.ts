import { client } from "..";

interface User {
    username: string;
    password: string;
    name: string;
}

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string): Promise<User> {
    try {
        const { rows } = await client.query(
            `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *`,
            [username, password, name]
        );
        return rows[0];
    } catch (error) {
        throw new Error("Unable to create user");
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number): Promise<User> {
    try {
        const { rows } = await client.query(
            `SELECT * FROM users WHERE id = $1`,
            [userId]
        );
        return rows[0];
    } catch (error) {
        throw new Error("Unable to get user");
    }
}
