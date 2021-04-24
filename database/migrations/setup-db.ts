import * as fs from "fs";
import { query } from "../connection";
import Logger  from "../../utils/Logger";

/*let filehandle = fs.readFileSync("database/migrations/sqls/001-createPropertyType.sql", (err, data) =>{
    console.log('data', data)
});
console.log(filehandle.toString())

query(filehandle.toString(), [], (err, result) => {
    if(err) throw err
    if(result) console.log('Table is up')
})*/

const dir = fs.readdirSync("database/migrations/sqls");
Logger.error("Migration", "Error")
Logger.info('Migration', "info message...")