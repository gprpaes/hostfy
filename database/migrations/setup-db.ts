import * as fs from "fs";
import { query } from "../connection";
import Logger from "../../utils/Logger";
import { APP_COMPONENTS, BASE_MIGRATION_PATH } from "../../const";

try {
  const dir = fs.readdirSync(BASE_MIGRATION_PATH);
  Logger.info(
    APP_COMPONENTS.SETUP_DB,
    `Found ${dir.length} migration file(s)...`
  );

  (async () => {
    for (let file of dir) {
      Logger.info(APP_COMPONENTS.SETUP_DB, `Migrating ${file}...`);
      let sqlFile = fs.readFileSync(`${BASE_MIGRATION_PATH}/${file}`);
      await query(sqlFile.toString(), [])
        .then(() =>
          Logger.success(
            APP_COMPONENTS.SETUP_DB,
            `Successfully migrated ${file}..`
          )
        )
        .catch((err) => {
          Logger.error(APP_COMPONENTS.SETUP_DB, `Error on ${file}`);
          throw err;
        });
    }
  })();
} catch (error) {
  Logger.error(APP_COMPONENTS.SETUP_DB, error);
}
