import pkg from "pg";



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


export async function testConnection() {
    try {
        const dbRes = await pool.query("SELECT NOW()");
        const dbName = await pool.query("SELECT current_database()");

        const time = dbRes.rows[] 

        const time = dbRes.rows

    } catch (error) {
        console.error("Database connection failed");
    }
}