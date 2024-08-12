import pkg from "pg";
import "dotenv/config";
import createUsersTable from "../model/user.js";
import createRequestTable from "../model/request.js";
import createFileTable from "../model/file.js";



const { Pool } = pkg;




export const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});


export async function databaseInit() {
    try {
        const dbRes = await pool.query("SELECT NOW()");
        const dbName = await pool.query("SELECT current_database()");
        const time = dbRes.rows[0].now;
        const name = dbName.rows[0].current_database;
        console.log(`Database connected at ${time} on ${name}`);
        //create users table
        await createUsersTable();
        await createRequestTable();
        await createFileTable();

    } catch (error) {
        console.error("Database connection failed");
    }
}