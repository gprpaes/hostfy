import { Pool } from "pg";
import dotenv from "dotenv";
import { PostgresCallback } from "../types";

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  // @ts-ignore
  port: process.env.DB_PORT,
  ssl: {
    //@ts-ignore
    require: true,
    rejectUnauthorized: false,
  },
});

export const query = (
  text: string,
  params: Array<any>,
) => pool.query(text, params);
