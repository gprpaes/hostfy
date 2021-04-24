import { QueryResult } from "pg";

export type PostgresCallback = (err: Error, result: QueryResult<any>) => void;